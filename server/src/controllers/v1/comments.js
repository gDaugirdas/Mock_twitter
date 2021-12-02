const mysql = require('mysql2/promise');

const { dbConfig } = require('../../config');

const { commentPostSchema } = require('../../schemas');

const postComment = async (req, res) => {
  let userInput = req.body;
  const userId = req.user.id;
  const { id } = req.params;

  try {
    userInput = await commentPostSchema.validateAsync(userInput);
  } catch (err) {
    return res.status(400).send({
      err: err.details[0]?.message || 'Unkown error, please contact support',
    });
  }
  try {
    const query = `INSERT INTO bf_comments (user_id, tweet_id, comment) VALUES (${mysql.escape(
      userId,
    )}, ${mysql.escape(id)}, ${mysql.escape(userInput.comment)})`;

    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(query);
    await con.end();

    return data.affectedRows === 0
      ? res.status(400).send({ err: 'Comment post was unsuccessful' })
      : res.send({ msg: 'Comment posted successfully' });
  } catch (err) {
    return res.status(500).send({ err: 'Server error' });
  }
};

module.exports = { postComment };
