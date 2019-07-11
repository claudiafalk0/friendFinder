var tableData = require('../data/friends');

module.exports = function(app){
    app.get('/api/friends', function(req,res){
        res.json(tableData);
    });

    app.post('/api/friends', function(req,res){
        var total = 0;
        tableData.push(req.body);
        res.json(true);
        for(i=0; i < req.body.score.length; i++){
            var num = parseInt(req.body.score[i]);
            console.log(num);
            total = total + num;
        }
        console.log(total)
    });

    // app.post('/api/friends', function(req,res){
    //     // for(i=0; i < tableData.length; i++){
    //     //     if()
    //     // }
    // })
};