var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);
app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT);
})
// var friends = [

//     {
//         name: 'Monica Geller',
//         photo: monica_geller.jpg,
//         scores: [
//             5,
//             1,
//             4,
//             4,
//             5,
//             1,
//             2,
//             5,
//             4,
//             1
//         ]
        
//     }
// ]
