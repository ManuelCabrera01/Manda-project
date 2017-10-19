
 // picture uploa
const multer                    = require('multer')
const upload                    = multer ({ dest: './public/uploads/' });
const express                   = require('express');
const router                    = express.Router();
const passport                  = require("passport");
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const ProfilePicture              = require('../models/pictures')


router.get('/authentication/singup', ensureLoggedIn(), (req, res) => {
    res.render('profile/pifile-page');
});


router.post('/upload', ensureLoggedIn(), upload.single('photo'), (req, res) => {

   const pic = new ProfilePicture({
      name: req.body.name,
      pic_path: `/uploads/${req.file.filename}`,
      pic_name: req.file.originalname
    })
    pic.save((err) => {

       res.redirect('/');
    });

});

module.exports = router;
