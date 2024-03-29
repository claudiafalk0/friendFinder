var path = require('path');


module.exports = function(app){
    app.get('/survey', function(req,res){
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
    app.get('/results', function(req,res){
        res.sendFile(path.join(__dirname, '../index.html'));
    });
    app.get('*', function(req,res){
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
};
