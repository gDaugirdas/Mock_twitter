const express = require('express');
const router = express.Router();

const fileUploadErrorHandler = require('../../middleware/fileUploadErrorHandler');

const multerConfig = require('../../utils/multerConfig');

const { isLoggedIn } = require('../../middleware/isLoggedIn');

const { updateProfilePicture } = require('../../controllers/v1');

router.use(multerConfig.single('file'));
router.use(fileUploadErrorHandler);

router.put('/profile', isLoggedIn, updateProfilePicture);

module.exports = router;
