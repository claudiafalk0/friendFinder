var tableData = require('../data/friends');
var total = 0;
var winningTotal = 0;
var winningObj = 0;
var totalArr = [];

module.exports = function(app){
    app.post('/api/friends', function(req,res){
        tableData.push(req.body);
        res.json(true);

            for(i=0; i < req.body.scores.length; i++){
                var num = parseInt(req.body.scores[i]);
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
        }
        for(i = 0; i < totalArr.length; i++) {
            // totalArr.forEach(function(val){
            var x, y = 0;
            totalArr[i] > total ? x = totalArr[i] : y = totalArr[i];
            totalArr[i] < total ? x = total : y = total; 
            if (winningTotal === 0 || (x - y) < winningTotal) {
                winningTotal = totalArr[i];
                winningObj = i;
            }
        };
        console.log(tableData[i]);
        // console.log('This is the winning Arr ' + totalArr[i]);
        console.log(totalArr[0] + "|" + totalArr[1] + "|" + winningTotal);
        console.log(tableData[winningObj]);
        // res.send({friendsData: tableData[winningObj]});
        // console.log('arrays total: ' + arrTotal);
    });
    app.get('/api/friends', function(req,res){
        res.json({friendsData:tableData[winningObj]});
    });

    // app.post('/api/friends', function(req,res){
        //     // for(i=0; i < tableData.length; i++){
    //     //     if()
    //     // }
    // })
};