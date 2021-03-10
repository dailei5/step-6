// const express = require('express');
// const router = express.Router();
// const mysql = require('./dbcon.js');
//
//
// router.get('/', function(req, res){
//     var callbackCount = 0;
//     var context = {};
//     getGuides(res, context, complete);
//     function complete(){
//         callbackCount++;
//         if(callbackCount >= 2){
//             // console.log(context)
//             res.render('sign_in', context);
//         }
//     }
//
// });
//
// /*
// METHOD WORKS!!!
//  Adds a guide, redirects to the people page after adding */
// router.post('/', function(req, res) {
//     // console.log(req.body.password)
//     console.log(req.body)
//     // var mysql = req.app.get('mysql');
//     var sql = "INSERT INTO GuideRegistrations (firstName, lastName, password) VALUES (?,?,?)";
//     var inserts = [req.body.firstName, req.body.lastName, req.body.password];
//     sql = mysql.pool.query(sql, inserts, function (error, results, fields) {
//         if (error) {
//             console.log(JSON.stringify(error))
//             res.write(JSON.stringify(error));
//             res.end();
//         } else {
//             res.render('sign_in');
//         }
//     });
// });
//
// module.exports = router

const express = require('express');
const router = express.Router();
const mysql = require('./dbcon.js');

router.get('/:firstName', function(req, res){
    var callbackCount = 0;
    var context = {};
    getGuides(res, context, complete);
    function complete(){
        callbackCount++;
        if(callbackCount >= 2){
            // console.log(context)
            res.render('sign_in', context);
        }
    }

});


/*
METHOD WORKS!!!
 Adds a guide, redirects to the people page after adding */
router.post('/:firstName', function(req, res) {
    console.log(req.body.guides)
    console.log(req.body)
    // var mysql = req.app.get('mysql');
    var sql = "INSERT INTO GuideRegistrations (firstName, lastName, password, ) VALUES (?,?,?,)";
    var inserts = [req.body.firstName, req.body.lastName, req.body.password];
    sql = mysql.pool.query(sql, inserts, function (error, results, fields) {
        if (error) {
            console.log(JSON.stringify(error))
            res.write(JSON.stringify(error));
            res.end();
        } else {
            res.render('sign_in');
        }
    });
});

module.exports = router