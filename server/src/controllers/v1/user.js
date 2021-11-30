const mysql = require('mysql2/promise');

const { dbConfig } = require('../../config');

const store = require('../../helpers/store');

const getUser = async (req, res) => {
  const { id } = req.params;

  const getUserData = async () => {
    try {
      const query = `SELECT bf_users.id, bf_users.first_name, bf_users.last_name, bf_users.email, bf_users.profile_picture, bf_users.created_at FROM bf_users WHERE id = ${mysql.escape(
        id,
      )}`;

      const con = await mysql.createConnection(dbConfig);
      const [data] = await con.execute(query);
      await con.end();

      return data;
    } catch (err) {
      return res.status(500).send({ err: 'Server error' });
    }
  };

  const getUserImages = async () => {
    try {
      const query = `SELECT id, image_url FROM bf_profile_images WHERE user_id = ${mysql.escape(
        id,
      )}`;

      const con = await mysql.createConnection(dbConfig);
      const [data] = await con.execute(query);
      await con.end();

      return data;
    } catch (err) {
      return res.status(500).send({ err: 'Server error' });
    }
  };

  try {
    const user = await getUserData();
    const images = await getUserImages();
    return res.send({ user, images });
  } catch (err) {
    return res.status(500).send({ err: 'Server error' });
  }
};

const postProfilePicture = async (req, res) => {
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
      : res.send({ msg: 'Image uploaded!', imageUrl: imageUrl });
  } catch (err) {
    return res.status(500).send({ err: 'Server error' });
  }
};

const postProfileGalleryPicture = async (req, res) => {
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
    const query = `INSERT INTO bf_profile_images (user_id, image_url) VALUES (${mysql.escape(
      userId,
    )}, ${mysql.escape(imageUrl)})`;

    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(query);
    await con.end();

    return data.affectedRows === 0
      ? res.status(500).send({ err: "Gallery image wasn't uploaded" })
      : res.send({
          msg: 'Gallery image uploaded',
          imageUrl: imageUrl,
          id: data.insertId,
        });
  } catch (err) {
    return res.status(500).send({ err: 'Server error' });
  }
};

const deleteProfileGalleryPicture = async (req, res) => {
  const userId = req.user.id;

  const { id } = req.params;

  try {
    const query = `DELETE FROM bf_profile_images WHERE user_id = ${mysql.escape(
      userId,
    )} AND id = ${mysql.escape(id)}`;

    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(query);
    await con.end();

    return data.affectedRows === 0
      ? res.status(500).send({ err: "Gallery image wasn't deleted" })
      : res.send({ msg: 'Gallery image deleted' });
  } catch (err) {
    return res.status(500).send({ err: 'Server error' });
  }
};

module.exports = {
  getUser,
  postProfilePicture,
  postProfileGalleryPicture,
  deleteProfileGalleryPicture,
};
