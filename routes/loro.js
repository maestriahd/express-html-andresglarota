var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('loro',
    { title: 'LOROS',
    saludo: 'cacatua',

    loro: 'http://i.giphy.com/uhTAsrG52xPMs.gif'
  }
  );
});

module.exports = router;
