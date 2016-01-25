'use strict';

var params = getProcessParameters();

exitOnSignal('SIGTERM');

var logLevelsMap = {
    'DEBUG': 1, 'INFO': 2, 'WARNING': 3, 'ERROR': 4, 'CRITICAL': 5
};

if (Object.keys(params).length > 0) {
    // custom metadata keys are prefixed with C_
    console.error(' LOCATION: ' + params.C_ALM_LOCATION);
    console.error(' DOMAIN: ' + params.C_DOMAIN);
    console.error(' PROJECT: ' + params.C_PROJECT);
} else {
    console.log('[]');
    process.exit(0);
}

readInputStream(parseJSON);

function parseJSON(data) {

    console.error(' Start parsing alm-run JSON');
    var testRunJson = doParse(data);
    log('INFO', 'processor.js', 'ALM test run payload to be sent to metrics-gateway-service; size in characters: ' + testRunJson.length);
    log('DEBUG', 'processor.js', 'ALM test run payload to be sent to metrics-gateway-service: ' + testRunJson);
    //use process stdout via console.log to send the result to result-processing (parent process)
    console.log(testRunJson);
    process.exit(0);
}

var doParse = function (data) {

    var result = JSON.parse(data);
    var testrun = [];
    var elements = result.entities.length;
    for (var i = 0; i < elements; i++) {
        var testRunEvent = {};
        testRunEvent.event = "tm_testrun";
        //data timestamp is in UTC already, just should be adjusted with ISO-8601
        var fieldNameToValueMap = getFieldNameToValueMap(result.entities[i]);
        var executionDate = fieldNameToValueMap["execution-date"].value;
        var executionTime = fieldNameToValueMap["execution-time"].value;
        testRunEvent.time = new Date(executionDate + ' ' + executionTime).toISOString();
        //set ID section
        var id = {};
        id.instance = fieldNameToValueMap["id"].value;
        id.test_id = fieldNameToValueMap["test-id"].value;
        testRunEvent.id = id;
        //set tags, which are not from metadata
        var tags = {};
        tags.user = fieldNameToValueMap["owner"].value;
        tags.testset = fieldNameToValueMap["cycle-name"].value;
        tags.type = fieldNameToValueMap["subtype-id"].value;
        testRunEvent.tags = tags;
        var source = {};
        source.server = params.C_ALM_LOCATION;
        source.domain = params.C_DOMAIN;
        source.project = params.C_PROJECT;
        testRunEvent.source = source;
        var results = {};
        results.status = fieldNameToValueMap["status"].value;
        results.run_time = fieldNameToValueMap["duration"].value;
        results.steps = [];
        testRunEvent.result = results;

        testrun.push(testRunEvent);
    }
    var testRunJson = JSON.stringify(testrun);

    return testRunJson;
};

var getFieldNameToValueMap = function getFieldNameToValueMap(jsonFields) {

    var ret = {};
    for (var i = 0; i < jsonFields.Fields.length; i++) {
        ret[jsonFields.Fields[i].Name] = jsonFields.Fields[i].values[0];
    }

    return ret;
};

function exitOnSignal(signal) {
    process.on(signal, function () {
        console.error(' Caught ' + signal + ', exiting');
        process.exit(1);
    });
}

function getProcessParameters() {
    var params = {};
    var keys = Object.keys(process.env);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (key.lastIndexOf('P_', 0) === 0) {
            var value = process.env[key];
            params[key.substr(2)] = value;
        }
    }
    return params;
}

function readInputStream(callback) {
    console.error(' Input stream received, start reading');

    process.stdin.setEncoding('utf8');
    var fullInput = '';
    process.stdin.on('readable', function () {
        var chunk = process.stdin.read();
        if (chunk !== null) {
            log('INFO', 'processor.js', 'Next chunk size: ' + chunk.length);
            log('DEBUG', 'processor.js', 'Next chunk received: ' + chunk);
            fullInput = fullInput + chunk;
        }
    });

    process.stdin.on('end', function () {
        if (fullInput.length > 0) {
            log('INFO', 'processor.js', 'XML created from the input stream; size in characters: ' + fullInput.length);
            callback(fullInput);
        }
    });
}

function log(level, location, message) {
    var logLevel = logLevelsMap[level];
    var configuredLogLevel = logLevelsMap[process.env.P_LOG_LEVEL || 'DEBUG'];
    if (logLevel >= configuredLogLevel) {
        console.error(level + ':' + location + ':' + message);
    }
}

module.exports.getFieldNameToValueMap = getFieldNameToValueMap;
module.exports.doParse = doParse;
