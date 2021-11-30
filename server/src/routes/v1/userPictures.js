const express = require('express');
const router = express.Router();

const fileUploadErrorHandler = require('../../middleware/fileUploadErrorHandler');

const multerConfig = require('../../utils/multerConfig');

const { isLoggedIn } = require('../../middleware/isLoggedIn');

const {
  updateProfilePicture,
  postProfileGalleryPicture,
  deleteProfileGalleryPicture,
} = require('../../controllers/v1');

router.use(multerConfig.single('file'));
router.use(fileUploadErrorHandler);

router.put('/profile', isLoggedIn, updateProfilePicture);

router.post('/gallery', isLoggedIn, postProfileGalleryPicture);

router.delete('/gallery/:id', isLoggedIn, deleteProfileGalleryPicture);

module.exports = router;
