var japa = require("java-parser");
var RuleEngine = require("node-rules");
var JSONPath = require('JSONPath');

var rules = [{
    "condition": function(R) {
      JSONPath({json: this, path: "$.imports.com.sun.jna", callback: function(){
        R.when(false);
      }});


    },
    "consequence": function(R) {
        this.foo = false;
        R.stop();
    }
}];


exports.analyze=function(filecontents,callback) {
  var parsedJava = japa.parse(filecontents);
  var R = new RuleEngine(rules);
  R.execute(parsedJava,function(result){
    callback(result);
  });
}
