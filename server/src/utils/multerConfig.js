const checkFileType = require('./checkFileType');
const multer = require('multer');

const multerConfig = multer({
  storage: multer.memoryStorage(),
  limits: {
    // File no larger than 5MB
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter(_req, file, callbackFn) {
    checkFileType(file, callbackFn);
  },
});

module.exports = multerConfig;
