const express = require('express');

const {signup, login, singup} = require('../controllers/auth');

const router = express.Router();

router.post('/signup', singup);
router.post('/login', login);

module.exports = router;