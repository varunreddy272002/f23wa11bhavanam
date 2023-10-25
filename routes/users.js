var express = require('express');
var router = express.Router();
let sum = 0;
let more = 0;

router.get('/computation', function(req, res, next){

  var x = req.x;

  if(!x){

    x = Math.random()*1000;

  }

  res.send(`Math.log(${x}) is: ${Math.log(x)}`);

});

router.get('/', function(req, res, next) {

  more = more + 1; // Increment 'more' by 1
    sum += more; // Add the value of 'more' to 'sum'
    res.send(`Sum is: ${sum}`);
});

module.exports = router;
