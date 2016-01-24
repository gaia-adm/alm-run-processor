'use strict';

process.env.P_C_ALM_LOCATION = 'http://localhost:8082';
process.env.P_C_DOMAIN = 'Default';
process.env.P_C_PROJECT = 'ProjectNumberOne';

var assert = require('assert');
var pr = require('./../processor');

var entitiesJson = '{\"entities\":[{\"Fields\":[{\"Name\":\"test-id\",\"values\":[{\"value\":\"135\"}]},{\"Name\":\"test-name\",\"values\":[{\"value\":\"Delete Order\"}]},{\"Name\":\"has-linkage\",\"values\":[{\"value\":\"N\"}]},{\"Name\":\"path\",\"values\":[{\"value\":\"5_1\"}]},{\"Name\":\"cycle-id\",\"values\":[{\"value\":\"5\"}]},{\"Name\":\"vc-version-number\",\"values\":[]},{\"Name\":\"draft\",\"values\":[{\"value\":\"N\"}]},{\"Name\":\"host\",\"values\":[{\"value\":\"KITE\"}]},{\"Name\":\"id\",\"values\":[{\"value\":\"1\"}]},{\"Name\":\"state\",\"values\":[{}]},{\"Name\":\"test-config-id\",\"values\":[{\"value\":\"1135\"}]},{\"Name\":\"ver-stamp\",\"values\":[{\"value\":\"4\"}]},{\"Name\":\"iters-params-values\",\"values\":[{}]},{\"Name\":\"os-build\",\"values\":[{\"value\":\"Build 2600\"}]},{\"Name\":\"os-sp\",\"values\":[{\"value\":\"Service Pack 2\"}]},{\"Name\":\"name\",\"values\":[{\"value\":\"Run_1-27_14-34-57\"}]},{\"Name\":\"testcycl-name\",\"values\":[{\"value\":\"Delete Order [1]\"}]},{\"Name\":\"status\",\"values\":[{\"value\":\"Failed\"}]},{\"Name\":\"os-config\",\"values\":[{}]},{\"Name\":\"vc-locked-by\",\"values\":[{}]},{\"Name\":\"bpt-structure\",\"values\":[{}]},{\"Name\":\"cycle\",\"values\":[{}]},{\"Name\":\"duration\",\"values\":[{\"value\":\"186\"}]},{\"Name\":\"execution-date\",\"values\":[{\"value\":\"2011-01-27\"}]},{\"Name\":\"last-modified\",\"values\":[]},{\"Name\":\"subtype-id\",\"values\":[{\"value\":\"hp.qc.run.BUSINESS-PROCESS\"}]},{\"Name\":\"attachment\",\"values\":[{}]},{\"Name\":\"test-description\",\"values\":[{\"value\":\"<html><body>\\nOrder deletion\\n<\/body><\/html>\"}]},{\"Name\":\"text-sync\",\"values\":[{}]},{\"Name\":\"assign-rcyc\",\"values\":[{}]},{\"Name\":\"owner\",\"values\":[{\"value\":\"cecil_alm\"}]},{\"Name\":\"pinned-baseline\",\"values\":[{}]},{\"Name\":\"comments\",\"values\":[{}]},{\"Name\":\"iters-sum-status\",\"values\":[{}]},{\"Name\":\"bpta-change-detected\",\"values\":[]},{\"Name\":\"test-instance\",\"values\":[{\"value\":\"1\"}]},{\"Name\":\"cycle-name\",\"values\":[{\"value\":\"Flight Application (Fail)\"}]},{\"Name\":\"os-name\",\"values\":[{\"value\":\"Windows XP\"}]},{\"Name\":\"environment\",\"values\":[{}]},{\"Name\":\"vc-status\",\"values\":[{}]},{\"Name\":\"execution-time\",\"values\":[{\"value\":\"14:38:14\"}]},{\"Name\":\"user-01\",\"values\":[{}]},{\"Name\":\"bpta-change-awareness\",\"values\":[{}]},{\"Name\":\"testcycl-id\",\"values\":[{\"value\":\"42\"}]}],\"Type\":\"run\",\"children-count\":0}],\"TotalResults\":168}'

describe('processor-test', function () {

    describe('#getFieldNameToValueMap()', function () {
        it('create map', function () {
            var result = JSON.parse('{"Fields":[{"Name":"test-id","values":[{"value":"135"}]},{"Name":"test-name","values":[{"value":"Delete Order"}]}]}');
            var fieldNameToValueMap = pr.getFieldNameToValueMap(result);
            assert.equal(fieldNameToValueMap['test-id'].value, '135', 'should be 135');
            assert.equal(fieldNameToValueMap['test-name'].value, 'Delete Order', 'should be Delete Order');
        });

        it('create map with empty values as input', function () {
            var result = JSON.parse('{"Fields":[{"Name":"test-id","values":[{"value":"135"}]},{"Name":"comments","values":[{}]}]}');
            var fieldNameToValueMap = pr.getFieldNameToValueMap(result);
            assert.equal(fieldNameToValueMap['test-id'].value, '135', 'should be 135');
            assert.equal(fieldNameToValueMap['comments'].value, undefined, 'comments should be empty');
        });
    });

    describe('#doParse()', function () {
        it('parse json input', function () {
            var result = pr.doParse(entitiesJson);
            console.log(result);
        });
    });
});




