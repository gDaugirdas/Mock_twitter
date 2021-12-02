const mysql = require('mysql2/promise');

const { dbConfig } = require('../../config');

const store = require('../../helpers/store');

const updateProfilePicture = async (req, res) => {
  console.log(req);
  if (!req.file) {
    return res.status(400).send({
      err: "Image wasn't uploaded",
    });
  }
  const myFile = req.file;

  const imageUrl = await store(myFile);

  if (!imageUrl.length > 0) {
    return res.status(400).send({
      err: "Image wasn't uploaded to cloud",
    });
  }

  const userId = req.user.id;

  try {
    const query = `UPDATE bf_users SET profile_picture = ${mysql.escape(
      imageUrl,
    )} WHERE id = ${mysql.escape(userId)}`;

    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(query);
    await con.end();

    return data.affectedRows === 0
      ? res.status(500).send({ err: "Image wasn't uploaded to profile" })
      : res.send({ msg: 'Profile image updated', imageUrl: imageUrl });
  } catch (err) {
    return res.status(500).send({ err: 'Server error' });
  }
};

module.exports = {
  updateProfilePicture,
};
