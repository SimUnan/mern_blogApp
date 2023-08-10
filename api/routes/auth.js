const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { loginRoute, registerRoute } = require('../controller/auth');

router.post('/register', registerRoute);
router.post('/login', loginRoute);

module.exports = router;
