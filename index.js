const express = require('express');
const handlebars = require('./handlebars.js');
const config = require('./config.js');
const app = express();
const PORT = config.PORT;

handlebars.attach([app]);

app.use(function(req, res, next){
  console.log('Path: ' + req.path);
  next();
});

app.get('/', function(req, res){
  res.render('home');
});

app.listen(PORT, function(){
    console.log('Server running on ' + PORT);
});
