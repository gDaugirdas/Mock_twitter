const mysql = require('mysql2/promise');

const { dbConfig } = require('../../config');

const { tweetPostSchema, tweetUpdateSchema } = require('../../schemas');

const getTweets = async (req, res) => {
  const { page } = req.params;
  const limit = 10;
  const offset = (page - 1) * limit;

  try {
    const query = `
    SELECT bf_users.first_name, bf_users.profile_picture, bf_tweets.tweet_text, bf_tweets.tweet_attachment, bf_tweets.created_at, bf_tweets.id, bf_tweets.user_id, SUM(bf_likes.liked) AS likes
    FROM bf_tweets
    LEFT JOIN bf_users
    ON bf_tweets.user_id = bf_users.id
    LEFT JOIN bf_comments
    ON bf_tweets.id = bf_comments.tweet_id
    LEFT JOIN bf_likes
    ON bf_tweets.id = bf_likes.tweet_id
    GROUP BY bf_tweets.id
    ORDER BY bf_tweets.created_at DESC
    LIMIT ${limit}
    OFFSET ${offset}
    `;

    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(query);
    await con.end();

    data &&
      data.forEach((tweet) => {
        tweet.likes = Number(tweet.likes);
      });

    return data.length === 0
      ? res.status(404).send({ err: 'Tweets not found' })
      : res.send(data);
  } catch (err) {
    return res.status(500).send({ err: 'Server error' });
  }
};

const getTweet = async (req, res) => {
  const { id } = req.params;

  try {
    const query = `
    SELECT bf_users.first_name, bf_users.profile_picture, bf_users.created_at, bf_tweets.tweet_text, bf_tweets.tweet_attachment, bf_tweets.created_at, bf_tweets.likes, bf_tweets.id, bf_tweets.user_id
    FROM bf_users
    LEFT JOIN bf_tweets
    ON bf_users.id = bf_tweets.user_id
    WHERE bf_tweets.id = ${mysql.escape(id)}
    `;

    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(query);
    await con.end();

    return data.length === 0
      ? res.status(404).send({ err: 'Tweet not found' })
      : res.send(data);
  } catch (err) {
    return res.status(500).send({ err: 'Server error' });
  }
};

const getTweetCount = async (req, res) => {
  try {
    const query = `
    SELECT COUNT(*) AS count
    FROM bf_tweets
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
  const user = req.user;
  const { id } = req.params;

  let userInput = req.body;

  try {
    const query = `SELECT user_id FROM bf_tweets WHERE id = ${mysql.escape(
      id,
    )}`;

    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(query);
    await con.end();

    if (data[0].user_id !== user.id) {
      return res.status(401).send({
        err: 'You are not authorized to edit this tweet',
      });
    }
  } catch (err) {
    return res.status(500).send({ err: 'Server error' });
  }

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
    )}, tweet_attachment = ${mysql.escape(
      userInput.tweet_attachment,
    )} WHERE id = ${mysql.escape(id)}`;

    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(query);
    await con.end();

    return data.affectedRows === 0
      ? res.status(404).send({ err: 'Tweet update was unsuccessful' })
      : res.send(data);
  } catch (err) {
    return res.status(500).send({ err: 'Server error' });
  }
};

const deleteTweet = async (req, res) => {
  const user = req.user;
  const { id } = req.params;

  try {
    const query = `SELECT user_id FROM bf_tweets WHERE id = ${mysql.escape(
      id,
    )}`;

    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(query);
    await con.end();

    if (data[0].user_id !== user.id) {
      return res
        .status(403)
        .send({ err: 'You are not authorized to delete this tweet' });
    }
  } catch (err) {
    return res.status(500).send({ err: 'Server error' });
  }

  try {
    const query = `DELETE FROM bf_tweets WHERE id = ${mysql.escape(id)}`;

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
  getTweetCount,
  postTweet,
  updateTweet,
  deleteTweet,
};
