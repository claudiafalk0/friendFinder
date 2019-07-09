var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
var friends = [

    {
        name: 'Monica Geller',
        photo: monica_geller.jpg,
        scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
        
    }
]
