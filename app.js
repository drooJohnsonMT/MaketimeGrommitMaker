var express = require("express");

var app = express();
app.set('port', (process.env.PORT || 8080));

app.use(express.static('public'));

app.post('/api',function(request, response){
  console.log(request.body);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running on:" + app.get('port'));
});
