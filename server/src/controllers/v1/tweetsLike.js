const mysql = require('mysql2/promise');

const { dbConfig } = require('../../config');

const getTweetLike = async (req, res) => {
  const user = req.user;
  const { id } = req.params;

  try {
    const con = await mysql.createConnection(dbConfig);

    const query = `SELECT * FROM bf_likes WHERE tweet_id = ${mysql.escape(
      id,
    )} AND user_id = ${mysql.escape(user.id)}`;

    const [data] = await con.execute(query);
    await con.end();

    return data.length === 0
      ? res.send({ liked: false })
      : res.send({ liked: true });
  } catch (err) {
    return res.status(500).send({ err: 'Server error' });
  }
};

const postTweetLike = async (req, res) => {
  const user = req.user;
  const { id } = req.params;

  try {
    const con = await mysql.createConnection(dbConfig);

    const query = `SELECT * FROM bf_likes WHERE bf_likes.tweet_id = ${mysql.escape(
      id,
    )} AND bf_likes.user_id = ${mysql.escape(user.id)}`;

    const [data] = await con.execute(query);
    await con.end();

    if (data.length > 0 && data[0].liked === 1) {
      try {
        const con = await mysql.createConnection(dbConfig);

        const query = `DELETE FROM bf_likes WHERE tweet_id = ${mysql.escape(
          id,
        )} AND user_id = ${mysql.escape(user.id)}`;

        const [data] = await con.execute(query);
        await con.end();

        return data.affectedRows === 0
          ? res.status(400).send({ err: 'Tweet unlike was unsuccessful' })
          : res.send({ msg: 'Tweet unliked' });
      } catch (err) {
        return res.status(500).send({ err: 'Server error' });
      }
    }
  } catch (err) {
    return res.status(500).send({ err: 'Server error' });
  }

  try {
    const con = await mysql.createConnection(dbConfig);

    const query = `INSERT INTO bf_likes (tweet_id, user_id, liked) VALUES (${mysql.escape(
      id,
    )}, ${mysql.escape(user.id)}, 1)`;

    const [data] = await con.execute(query);
    await con.end();

    return data.affectedRows === 0
      ? res.status(400).send({ err: 'Tweet like was unsuccessful' })
      : res.send({ msg: 'Tweet liked' });
  } catch (err) {
    return res.status(500).send({ err: 'Server error' });
  }
};

module.exports = { getTweetLike, postTweetLike };
