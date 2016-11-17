var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CMD' });
});

/* GET home page. */
router.get('/all', function(req, res, next) {
  res.render('all', { title: 'All characters',  chars: [{
      id: 11,
      comics: 'DC Comics',
      name: 'Batman',
      realName: 'Bruce Wayne',
      spec: 'Master detective',
      height: '188cm',
      weight: '95kg',
      gender: 'man',
      race: 'human',
      release: 'Detective Comics #27 (May 1939)',
      color: 'black',
      is: 'Good'
},{
    id: 11,
    comics: 'DC Comics',
    name: 'Batman',
    realName: 'Bruce Wayne',
    spec: 'Master detective',
    height: '188cm',
    weight: '95kg',
    gender: 'man',
    race: 'human',
    release: 'Detective Comics #27 (May 1939)',
    color: 'black',
    is: 'Good'
  }]
  });
});

module.exports = router;
