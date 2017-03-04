var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('perro',
    { title: 'HIENAS',
    texto: 'shruum',

    hombre_hiena: 'http://23.253.41.33/wp-content/uploads/10.208.149.45/uploads/2014/07/hiena3.jpeg'
  }
  );
});

module.exports = router;
