[![Circle CI](https://circleci.com/gh/gaia-adm/alm-run-processor.svg?style=svg)](https://circleci.com/gh/gaia-adm/alm-run-processor) [![Codacy Badge](https://api.codacy.com/project/badge/grade/356604127d8643f2844203f54b94bbaa)](https://www.codacy.com/app/alexei-led/alm-run-processor) [![](https://badge.imagelayers.io/gaiaadm/alm-run-processor:latest.svg)](https://imagelayers.io/?images=gaiaadm/alm-run-processor:latest 'Get your own badge on imagelayers.io')

# ALM run data processor

This is ALM run data processor for GAIA analytics. It is based on "gaiaadm/result-processing" Docker image.

Tested with ALM 12

**Input data format** is exactly as returned by ALM run ReST API.
 - Request example: /qcbin/rest/domains/DEMO/projects/DEMO/runs?page-size=<PAGE_SIZE>&start-index=<i>&order-by={time[asc]}
 - Response example:
 
 `
    {
        "entities":
        [
            {
                "Fields":
                [
                    {
                        "Name": "test-id",
                        "values":
                        [
                            {
                                "value": "135"
                            }
                        ]
                    },
                    {
                        "Name": "test-name",
                        "values":
                        [
                            {
                                "value": "Delete Order"
                            }
                        ]
                    },
                    {
                        "Name": "has-linkage",
                        "values":
                        [
                            {
                                "value": "N"
                            }
                        ]
                    },
                    {
                        "Name": "path",
                        "values":
                        [
                            {
                                "value": "5_1"
                            }
                        ]
                    },
                    {
                        "Name": "cycle-id",
                        "values":
                        [
                            {
                                "value": "5"
                            }
                        ]
                    },
                    {
                        "Name": "vc-version-number",
                        "values":
                        [
                        ]
                    },
                    {
                        "Name": "draft",
                        "values":
                        [
                            {
                                "value": "N"
                            }
                        ]
                    },
                    {
                        "Name": "host",
                        "values":
                        [
                            {
                                "value": "KITE"
                            }
                        ]
                    },
                    {
                        "Name": "id",
                        "values":
                        [
                            {
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "Name": "state",
                        "values":
                        [
                            {
                            }
                        ]
                    },
                    {
                        "Name": "test-config-id",
                        "values":
                        [
                            {
                                "value": "1135"
                            }
                        ]
                    },
                    {
                        "Name": "ver-stamp",
                        "values":
                        [
                            {
                                "value": "4"
                            }
                        ]
                    },
                    {
                        "Name": "iters-params-values",
                        "values":
                        [
                            {
                            }
                        ]
                    },
                    {
                        "Name": "os-build",
                        "values":
                        [
                            {
                                "value": "Build 2600"
                            }
                        ]
                    },
                    {
                        "Name": "os-sp",
                        "values":
                        [
                            {
                                "value": "Service Pack 2"
                            }
                        ]
                    },
                    {
                        "Name": "name",
                        "values":
                        [
                            {
                                "value": "Run_1-27_14-34-57"
                            }
                        ]
                    },
                    {
                        "Name": "testcycl-name",
                        "values":
                        [
                            {
                                "value": "Delete Order [1]"
                            }
                        ]
                    },
                    {
                        "Name": "status",
                        "values":
                        [
                            {
                                "value": "Failed"
                            }
                        ]
                    },
                    {
                        "Name": "os-config",
                        "values":
                        [
                            {
                            }
                        ]
                    },
                    {
                        "Name": "vc-locked-by",
                        "values":
                        [
                            {
                            }
                        ]
                    },
                    {
                        "Name": "bpt-structure",
                        "values":
                        [
                            {
                            }
                        ]
                    },
                    {
                        "Name": "cycle",
                        "values":
                        [
                            {
                            }
                        ]
                    },
                    {
                        "Name": "duration",
                        "values":
                        [
                            {
                                "value": "186"
                            }
                        ]
                    },
                    {
                        "Name": "execution-date",
                        "values":
                        [
                            {
                                "value": "2011-01-27"
                            }
                        ]
                    },
                    {
                        "Name": "last-modified",
                        "values":
                        [
                        ]
                    },
                    {
                        "Name": "subtype-id",
                        "values":
                        [
                            {
                                "value": "hp.qc.run.BUSINESS-PROCESS"
                            }
                        ]
                    },
                    {
                        "Name": "attachment",
                        "values":
                        [
                            {
                            }
                        ]
                    },
                    {
                        "Name": "test-description",
                        "values":
                        [
                            {
                                "value": "
    Order deletion
    "
                            }
                        ]
                    },
                    {
                        "Name": "text-sync",
                        "values":
                        [
                            {
                            }
                        ]
                    },
                    {
                        "Name": "assign-rcyc",
                        "values":
                        [
                            {
                            }
                        ]
                    },
                    {
                        "Name": "owner",
                        "values":
                        [
                            {
                                "value": "cecil_alm"
                            }
                        ]
                    },
                    {
                        "Name": "pinned-baseline",
                        "values":
                        [
                            {
                            }
                        ]
                    },
                    {
                        "Name": "comments",
                        "values":
                        [
                            {
                            }
                        ]
                    },
                    {
                        "Name": "iters-sum-status",
                        "values":
                        [
                            {
                            }
                        ]
                    },
                    {
                        "Name": "bpta-change-detected",
                        "values":
                        [
                        ]
                    },
                    {
                        "Name": "test-instance",
                        "values":
                        [
                            {
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "Name": "cycle-name",
                        "values":
                        [
                            {
                                "value": "Flight Application (Fail)"
                            }
                        ]
                    },
                    {
                        "Name": "os-name",
                        "values":
                        [
                            {
                                "value": "Windows XP"
                            }
                        ]
                    },
                    {
                        "Name": "environment",
                        "values":
                        [
                            {
                            }
                        ]
                    },
                    {
                        "Name": "vc-status",
                        "values":
                        [
                            {
                            }
                        ]
                    },
                    {
                        "Name": "execution-time",
                        "values":
                        [
                            {
                                "value": "14:38:14"
                            }
                        ]
                    },
                    {
                        "Name": "user-01",
                        "values":
                        [
                            {
                            }
                        ]
                    },
                    {
                        "Name": "bpta-change-awareness",
                        "values":
                        [
                            {
                            }
                        ]
                    },
                    {
                        "Name": "testcycl-id",
                        "values":
                        [
                            {
                                "value": "42"
                            }
                        ]
                    }
                ],
                "Type": "run",
                "children-count": 0
            }
        ],
        "TotalResults": 168
    }
 `

**Output data format** is exactly as specifed [here](https://github.com/gaia-adm/api-data-format)


## Building

Execute:
- docker build -t gaiaadm/alm-run-processor .

## Running

Execute:
- docker run -d -e AMQ_USER="admin" -e AMQ_PASSWORD="admin" -v "/tmp:/upload" --link rabbitmq-master:amqserver --link mgs:metricsgw --name aic gaiaadm/alm-run-processor
- For development the entire folder of this project can be copied to result-processing\processors directory and the started by server.js of the result-processing project.

Execute tests:
- to run unit tests: grunt unit
- to run code analysis: grunt jshint

Limitations:
- cannot run when RabbitMQ password is empty (common limitations for all data processors)

## How-to
**generate synthetic data** without having ALM and data collector running (Windows machine, all the names are just examples and can be changed):
- must run: RabbitMQ, results-upload-service
- run the processor at least once without any data to create a queue in RabbitMQ
- create c:\upload folder
- inside c:\upload create 4e516623-dfb8-48f2-9471-06e3bd23caf2 folder with a text file named 2b2d4e25-f9ec-4a09-9b5b-a1774048a5fd
- put to the text file following: `{"entities":[{"Fields":[{"Name":"test-id","values":[{"value":"135"}]},{"Name":"test-name","values":[{"value":"Delete Order"}]},{"Name":"has-linkage","values":[{"value":"N"}]},{"Name":"path","values":[{"value":"5_1"}]},{"Name":"cycle-id","values":[{"value":"5"}]},{"Name":"vc-version-number","values":[]},{"Name":"draft","values":[{"value":"N"}]},{"Name":"host","values":[{"value":"KITE"}]},{"Name":"id","values":[{"value":"1"}]},{"Name":"state","values":[{}]},{"Name":"test-config-id","values":[{"value":"1135"}]},{"Name":"ver-stamp","values":[{"value":"4"}]},{"Name":"iters-params-values","values":[{}]},{"Name":"os-build","values":[{"value":"Build 2600"}]},{"Name":"os-sp","values":[{"value":"Service Pack 2"}]},{"Name":"name","values":[{"value":"Run_1-27_14-34-57"}]},{"Name":"testcycl-name","values":[{"value":"Delete Order [1]"}]},{"Name":"status","values":[{"value":"Failed"}]},{"Name":"os-config","values":[{}]},{"Name":"vc-locked-by","values":[{}]},{"Name":"bpt-structure","values":[{}]},{"Name":"cycle","values":[{}]},{"Name":"duration","values":[{"value":"186"}]},{"Name":"execution-date","values":[{"value":"2011-01-27"}]},{"Name":"last-modified","values":[]},{"Name":"subtype-id","values":[{"value":"hp.qc.run.BUSINESS-PROCESS"}]},{"Name":"attachment","values":[{}]},{"Name":"test-description","values":[{"value":"<html><body>\nOrder deletion\n</body></html>"}]},{"Name":"text-sync","values":[{}]},{"Name":"assign-rcyc","values":[{}]},{"Name":"owner","values":[{"value":"cecil_alm"}]},{"Name":"pinned-baseline","values":[{}]},{"Name":"comments","values":[{}]},{"Name":"iters-sum-status","values":[{}]},{"Name":"bpta-change-detected","values":[]},{"Name":"test-instance","values":[{"value":"1"}]},{"Name":"cycle-name","values":[{"value":"Flight Application (Fail)"}]},{"Name":"os-name","values":[{"value":"Windows XP"}]},{"Name":"environment","values":[{}]},{"Name":"vc-status","values":[{}]},{"Name":"execution-time","values":[{"value":"14:38:14"}]},{"Name":"user-01","values":[{}]},{"Name":"bpta-change-awareness","values":[{}]},{"Name":"testcycl-id","values":[{"value":"42"}]}],"Type":"run","children-count":0}],"TotalResults":168}`
- login to RabbitMQ and publish message to "alm/run" queue:
 - delivery_mode:	2
 - headers:
   - accessToken: according your real token
   - tenantId: your tenantId
   - path: /upload/4e516623-dfb8-48f2-9471-06e3bd23caf2/2b2d4e25-f9ec-4a09-9b5b-a1774048a5fd
 - payload: {"dataType":"alm/run","C_ALM_LOCATION":"http://belozovs2.hpqcorp.emea.net:8080/qcbin","C_DOMAIN":"Default","C_PROJECT":"bp1","contentType":"application/json; charset=UTF-8","mimeType":"application/json","charset":"UTF-8"}
