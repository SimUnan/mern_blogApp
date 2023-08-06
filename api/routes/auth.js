const express = require('express');
const { LoginRoute, registerRoute } = require('../controller/auth');
const router = express.Router();

router.post('/register', registerRoute);
router.post('/login', LoginRoute);


module.exports = router;
