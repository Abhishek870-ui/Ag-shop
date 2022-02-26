var express = require('express');
var MongoClient = require('mongodb').MongoClient;
let multer = require("multer");

var url = "mongodb://localhost:27017/";

var router = express.Router();


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })
/* Post users listing. */
router.post('/saveProduct', upload.single('file'), function (req, res) {
  let reqest = req.body;
  reqest.p_img='uploads' + '/' + req.file.originalname ;

  var dbo = '';
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("ecommerce");
    dbo.collection("products_details").insertOne(reqest, function (err, ress) {
      if (err) throw err;
      res.send(JSON.stringify({'success':'success'}));
      db.close();
    });
  });

});




module.exports = router;