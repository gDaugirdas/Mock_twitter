const express = require('express');

const router = express.Router();

const { isLoggedIn } = require('../../middleware/isLoggedIn');

const { like } = require('../../controllers/v1');

router.post('/:id', isLoggedIn, like);

module.exports = router;
