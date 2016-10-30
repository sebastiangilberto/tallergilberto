var express = require('express');
var router = express.Router();
var ctrlPages = require('../controllers/pages');

/* GET */
router.get('/', ctrlPages.home);
router.get('/direccion', ctrlPages.direccion);
router.get('/contacto', ctrlPages.contacto);

/* POST */
//router.post('/contacto', ctrlPages.sendEmail);

module.exports = router;