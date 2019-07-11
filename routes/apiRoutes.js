var tableData = require('../data/friends');

module.exports = function(app){
    app.get('/api/friends', function(req,res){
        res.json(tableData);
    });

    app.post('/api/friends', function(req,res){
        var total = 0;
        var winningTotal = 0;
        var totalArr = [];
        tableData.push(req.body);
        res.json(true);
        for(i=0; i < req.body.score.length; i++){
            var num = parseInt(req.body.score[i]);
            total += num;
        }
        console.log(total);
        for(i = 0; i < (tableData.length - 1); i++){
            var scoreArr = tableData[i].scores;
            totalArr[i] = 0;
            if (scoreArr) {
                scoreArr.forEach(function(val){
                    totalArr[i] += val;
                });
            }
            console.log(totalArr[i]);
        }
        totalArr.forEach(function(val){
            var x, y = 0;
            val > total ? x = val : y = val;
            val < total ? x = total : y = total; 
            if (winningTotal === 0 || (x - y) < winningTotal) {
                winningTotal = val;
            }
        });
        console.log(totalArr[0] + "|" + totalArr[1] + "|" + winningTotal);
        // console.log('arrays total: ' + arrTotal);
    });

    // app.post('/api/friends', function(req,res){
    //     // for(i=0; i < tableData.length; i++){
    //     //     if()
    //     // }
    // })
};