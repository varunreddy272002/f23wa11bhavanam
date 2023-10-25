var express = require('express');
var router = express.Router();
let sum = 0;
let more = 0;
router.get('/', function(req, res, next) {

  more++; // Increment 'more' by 1
    sum += more; // Add the value of 'more' to 'sum'
    res.send(`Sum is: ${sum}`);
});

module.exports = router;
