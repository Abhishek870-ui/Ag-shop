var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res) {
    let request = req.body;
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("ecommerce");
      var collection = dbo.collection('logbook');
      collection.findOne(request, function(err,row){
        if(!row){
          
          res.status(200).json({'status':'failed' });

        }else{
          res.status(200).json({'status':'success' });

        }
      });



    });


})


router.post('/register', function(req, res, next) {
    let reqest =req.body;
    var dbo='';
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("ecommerce");
      dbo.collection("logbook").insertOne(reqest, function(err, ress) {
        if (err) throw err;
        res.send(JSON.stringify({'success':'success'}));
        db.close();
      });
    });


  });
  
module.exports = router;