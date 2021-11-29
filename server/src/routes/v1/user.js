const express = require('express');
const router = express.Router();

const fileUploadErrorHandler = require('../../middleware/fileUploadErrorHandler');

const multerConfig = require('../../utils/multerConfig');

const { isLoggedIn } = require('../../middleware/isLoggedIn');

const {
  getUser,
  postProfilePicture,
  postProfileGalleryPicture,
} = require('../../controllers/v1');

router.use(multerConfig.single('file'));
router.use(fileUploadErrorHandler);

router.get('/:id', isLoggedIn, getUser);

router.post('/profilePicture', isLoggedIn, postProfilePicture);

router.post('/profileGalleryPicture', isLoggedIn, postProfileGalleryPicture);

module.exports = router;
