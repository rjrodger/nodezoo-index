nodezoo-index
==============

nodezoo.com micro-service handling search.



curl -d '{"role":"search","cmd":"insert","name":"z0","data":{"foo":"z0 red"}}' http://localhost:9003/act
{"_index":"zoo","_type":"mod","_id":"z0","_version":1,"created":true}


curl -d '{"role":"search","cmd":"search","query":"red"}' http://localhost:9003/act


