var express = require("express");
var analyzer = require("./analyzer/analyzer.js");
var app = express();
var fs = require('fs');


function analyzeSampleData(language,callback){
  var filepath=__dirname + '/sampleData/'+language+'/main.java';
  var data="";
  fs.readFile(filepath,'utf8', function(err, data) {
      if (err) {
          throw err;
      }
      callback(data.toString());
  });
}

app.get('/sampledata/:language', function(req, res) {
    analyzeSampleData(req.params.language,function(fileContents){
      analyzer.analyze(fileContents,function(result){
        res.send(result);
      });
    });
});

app.listen(3000, function() {
    console.log('Analyzer app listening on port 3000!');
});
