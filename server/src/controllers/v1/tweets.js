const mysql = require('mysql2/promise');

const { dbConfig } = require('../../config');

const { tweetPostSchema, tweetUpdateSchema } = require('../../schemas');

const getTweets = async (req, res) => {
  const { page } = req.params;
  const limit = 10;
  const offset = (page - 1) * limit;

  try {
    const query = `
    SELECT bf_users.first_name, bf_users.profile_picture, bf_tweets.tweet_text, bf_tweets.tweet_attachment, bf_tweets.created_at, bf_tweets.id, bf_tweets.user_id, COUNT(bf_comments.id) AS comment_count
    FROM bf_tweets
    LEFT JOIN bf_users
    ON bf_tweets.user_id = bf_users.id
    LEFT JOIN bf_comments
    ON bf_tweets.id = bf_comments.tweet_id
    GROUP BY bf_tweets.id
    ORDER BY bf_tweets.created_at DESC
    LIMIT ${limit}
    OFFSET ${offset}
    `;

    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(query);
    await con.end();

    return data.length === 0
      ? res.status(404).send({ err: 'Tweets not found' })
      : res.send(data);
  } catch (err) {
    return res.status(500).send({ err: 'Server error' });
  }
};

const getTweet = async (req, res) => {
  const { id } = req.params;

  const getTweet = async () => {
    try {
      const query = `
      SELECT bf_users.first_name, bf_users.profile_picture, bf_users.created_at, bf_tweets.tweet_text, bf_tweets.tweet_attachment, bf_tweets.created_at, bf_tweets.likes, bf_tweets.id, bf_tweets.user_id, COUNT(bf_comments.id) AS comment_count
      FROM bf_users
      LEFT JOIN bf_tweets
      ON bf_users.id = bf_tweets.user_id
      LEFT JOIN bf_comments
      ON bf_tweets.id = bf_comments.tweet_id
      WHERE bf_tweets.id = ${mysql.escape(id)}
      `;

      const con = await mysql.createConnection(dbConfig);
      const [data] = await con.execute(query);
      await con.end();

      return data;
    } catch (err) {
      return res.status(500).send({ err: 'Server error' });
    }
  };

  const getComments = async () => {
    try {
      const query = `
      SELECT bf_users.first_name, bf_users.profile_picture, bf_users.created_at, bf_comments.comment, bf_comments.created_at, bf_comments.id, bf_comments.user_id
      FROM bf_users
      LEFT JOIN bf_comments
      ON bf_users.id = bf_comments.user_id
      WHERE bf_comments.tweet_id = ${mysql.escape(id)}
      ORDER BY bf_comments.created_at DESC
      `;

      const con = await mysql.createConnection(dbConfig);
      const [data] = await con.execute(query);
      await con.end();

      return data;
    } catch (err) {
      return res.status(500).send({ err: 'Server error' });
    }
  };

  try {
    const tweet = await getTweet();
    const comments = await getComments();

    return tweet.id > 0
      ? res.status(404).send({ err: 'Tweet not found' })
      : res.send({ ...tweet, comments: [...comments] });
  } catch (err) {
    return res.status(500).send({ err: 'Server error' });
  }
};

const postTweet = async (req, res) => {
  let userInput = req.body;
  const userId = req.user.id;

  try {
    userInput = await tweetPostSchema.validateAsync(userInput);
  } catch (err) {
    return res.status(400).send({
      err: err.details[0]?.message || 'Unkown error, please contact support',
    });
  }
  try {
    const query = `INSERT INTO bf_tweets (tweet_text, tweet_attachment, user_id) VALUES (${mysql.escape(
      userInput.tweet_text,
    )}, ${mysql.escape(userInput.tweet_attachment)}, ${mysql.escape(userId)})`;

    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(query);
    await con.end();

    return data.affectedRows === 0
      ? res.status(404).send({ err: 'Tweet post was unsuccessful' })
      : res.send({ data, msg: 'Tweet posted successfully' });
  } catch (err) {
    return res.status(500).send({ err: 'Server error' });
  }
};

const updateTweet = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;

  let userInput = req.body;

  console.log(userInput.tweet_text, id, userId);
  try {
    userInput = await tweetUpdateSchema.validateAsync(userInput);
  } catch (err) {
    return res.status(400).send({
      err: err.details[0]?.message || 'Unkown error, please contact support',
    });
  }

  try {
    const query = `UPDATE bf_tweets SET tweet_text = ${mysql.escape(
      userInput.tweet_text,
    )} WHERE id = ${mysql.escape(id)} AND user_id = ${mysql.escape(userId)}`;

    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(query);
    await con.end();

    return data.affectedRows === 0
      ? res.status(404).send({ err: 'Tweet update was unsuccessful' })
      : res.send({ msg: 'Tweet updated' });
  } catch (err) {
    return res.status(500).send({ err: 'Server error' });
  }
};

const deleteTweet = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;

  try {
    const query = `DELETE FROM bf_tweets WHERE id = ${mysql.escape(
      id,
    )} AND user_id = ${mysql.escape(userId)}`;

    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(query);
    await con.end();

    return data.affectedRows === 0
      ? res.status(404).send({ err: 'Tweet deletion was unsuccessful' })
      : res.send({ msg: 'Tweet deleted' });
  } catch (err) {
    return res.status(500).send({ err: 'Server error' });
  }
};

module.exports = {
  getTweets,
  getTweet,
  postTweet,
  updateTweet,
  deleteTweet,
};
