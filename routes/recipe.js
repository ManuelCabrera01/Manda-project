const express  = require('express');
const Recipe = require('../models/recipe');
const router   = express.Router();
const { ensureLoggedIn }  = require('connect-ensure-login');


router.get('/new', (req, res) => {
 res.render('recipe/new');
});


module.exports = router;
