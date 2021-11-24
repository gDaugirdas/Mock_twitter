const express = require('express');
const router = express.Router();
const multer = require('multer');

const { BlobServiceClient } = require('@azure/storage-blob');

const blobSassUrl =
  'https://twitter.blob.core.windows.net/?sv=2020-08-04&ss=b&srt=co&sp=rwdlacitfx&se=2022-02-03T06:49:33Z&st=2021-11-19T22:49:33Z&spr=https,http&sig=69RsmvuG1txx0opoks0%2BZzvewIdADp%2FxysSmDuG1SCQ%3D';

const containerName = 'twitter';

const containerClient = new BlobServiceClient(blobSassUrl).getContainerClient(
  containerName,
);

const uploadFileToBlob = async (fileName, fileBuffer) => {
  const blockBlobClient = containerClient.getBlockBlobClient(fileName);
  await blockBlobClient.upload(fileBuffer, fileBuffer.length);
};

// router.use(multerConfig.single('file'));
// router.use(fileUploadErrorHandler);

const multerConfig = multer({
  storage: multer.memoryStorage(),
  limits: {
    // File no larger than 5MB
    fileSize: 5 * 1024 * 1024,
  },
  //   fileFilter(_req, file, callbackFn) {
  //     checkFileType(file, callbackFn);
  //   },
});

router.post('/', multerConfig.single('file'), async (req, res) => {
  console.log(req.file);
  const { file } = req;
  console.log(file);
  //   const { fileName } = req.body;
  const fileBuffer = Buffer.from(file.buffer);
  await uploadFileToBlob('Hello.jpg', fileBuffer);
  res.send({
    status: 'success',
    message: 'File uploaded successfully',
  });
});

module.exports = router;
