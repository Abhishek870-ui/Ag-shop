var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var router = express.Router();

/* Post users listing. */
router.post('/saveProduct', function(req, res) {
    let reqest =req.body;
    var dbo='';
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("ecommerce");
      dbo.collection("products_details").insertOne(reqest, function(err, ress) {
        if (err) throw err;
        res.send('<script>alert("data inserted successfully") "</script> ');
        db.close();
      });
    });

});




module.exports = router;