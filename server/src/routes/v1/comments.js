const express = require('express');

const router = express.Router();

const { isLoggedIn } = require('../../middleware/isLoggedIn');

const { postComment } = require('../../controllers/v1');

router.post('/:id', isLoggedIn, postComment);

module.exports = router;
