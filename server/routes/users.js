var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    users: [
      {_id: 1, email: 'test.a@angular.com'},
      {_id: 2, email: 'test.b@grunt.com'},
      {_id: 3, email: 'test.b@express.com'}
    ]
  })
});

module.exports = router;
