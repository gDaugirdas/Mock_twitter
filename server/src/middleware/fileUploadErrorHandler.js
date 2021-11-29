const fileUploadErrorHandler = (err, req, res, next) => {
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res
      .status(413)
      .send({ err: 'File you are trying to upload is too large' });
  }
  if (err) {
    return res.status(400).send({ err });
  }
  return next();
};

module.exports = fileUploadErrorHandler;
