var express = require('express');
var router = express.Router();
var ctrlPages = require('../controllers/pages');

/* GET */
router.get('/', ctrlPages.home);

module.exports = router;