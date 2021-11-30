const mysql = require('mysql2/promise');

const { dbConfig } = require('../../config');

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

module.exports = {
  getUser,
};
