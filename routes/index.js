var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Phoenix' });
});

// router.get('/azeroth', function(req, res, next) {
//   res.render('azeroth', { title: 'Azeroth Heroes' });
// });

router.get('/contato', function(req, res, next) {
  res.render('contato', { title: 'Contato' });
});

router.get('/death', function(req, res, next) {
  res.render('death', { title: 'Death and Darkness' });
});

router.get('/encontro', function(req, res, next) {
  res.render('encontro', { title: 'Encontro da Phoenix' });
});

router.get('/equipes', function(req, res, next) {
  res.render('equipes', { title: 'Equipes' });
});

router.get('/eventos', function(req, res, next) {
  res.render('eventos', { title: 'Eventos' });
});

router.get('/fiscais', function(req, res, next) {
  res.render('fiscais', { title: 'fiscais' });
});

router.get('/gogoboys', function(req, res, next) {
  res.render('gogoboys', { title: 'Gogoboys' });
});

router.get('/feniquinha', function(req, res, next) {
  res.render('feniquinha', { title: 'Feniquinha' });
});

router.get('/guildrun', function(req, res, next) {
  res.render('guildrun', { title: 'Guild Run' });
});

router.get('/loja', function(req, res, next) {
  res.render('loja', { title: 'Loja' });
});

router.get('/loktar', function(req, res, next) {
  res.render('loktar', { title: 'Loktar Ogar' });
});

router.get('/quem-somos', function(req, res, next) {
  res.render('quem-somos', { title: 'Quem Somos' });
});

// router.get('/sindicato', function(req, res, next) {
//   res.render('sindicato', { title: 'Sindicato do Crime' });
// });

// router.get('/template', function(req, res, next) {
//   res.render('template', { title: 'Template' });
// });

router.get('/transmissoes', function(req, res, next) {
  res.render('transmissoes', { title: 'Transmissões' });
});


module.exports = router;
