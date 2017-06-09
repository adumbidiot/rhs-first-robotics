const express = require('express');
const handlebars = require('./handlebars.js');
const config = require('./config.js');
const app = express();
const PORT = config.PORT;
const DEV = config.DEV;

handlebars.attach([app]);

app.use(function(req, res, next){
  console.log('Path: ' + req.path);
  next();
});

app.use(function(req, res, next){
    if(req.protocol === 'http' && DEV === false){
        res.redirect('https://www.rhs-first-robotics.ml' + req.path);
    }else{
        next();
    }    
});

app.get('/', function(req, res){
  res.render('home', {home: true});
});

app.get('/favicon.ico', function(req, res){
    res.sendFile(__dirname + '/public/favicon.ico');
});

app.use(function(req, res){
    res.render('404');
});

app.listen(PORT, function(){
    console.log('Server running on ' + PORT);
});
