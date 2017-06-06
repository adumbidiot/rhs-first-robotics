const express = require('express');
const app = express();

app.use(function(req, res, next){
  console.log(req.path);
  next();
});

app.get('/', function(req, res){
  res.send('idontknow');
});

app.listen('8080');
