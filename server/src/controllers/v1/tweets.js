const mysql = require('mysql2/promise');
const Joi = require('joi');

const { dbConfig } = require('../../config');

const { tweetSchema } = require('../../schemas');

const getTweets = async (req, res) => {
  try {
    const query = `
    SELECT bf_users.first_name, bf_users.profile_picture, bf_users.created_at, bf_tweets.tweet_text, bf_tweets.tweet_attachment, bf_tweets.created_at, bf_tweets.likes, bf_tweets.id, bf_tweets.user_id
    FROM bf_users
    LEFT JOIN bf_tweets
    ON bf_users.id = bf_tweets.user_id
    `;

    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(query);
    await con.end();

    return res.send(data);
  } catch (err) {
    return res.status(500).send({ err: 'Server error' });
  }
};

const postNewTweet = async (req, res) => {
  let userInput = req.body;
  console.log(userInput);
  try {
    userInput = await tweetSchema.validateAsync(userInput);
  } catch (err) {
    return res.status(400).send({
      err: err.details[0]?.message || 'Unkown error, please contact support',
    });
  }
  try {
    const query = `INSERT INTO bf_tweets (tweet_text, tweet_attachment, user_id) VALUES (${mysql.escape(
      userInput.tweet_text,
    )}, ${mysql.escape(userInput.tweet_attachment)}, ${mysql.escape(
      userInput.user_id,
    )})`;

    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(query);
    await con.end();

    return res.send(data);
  } catch (err) {
    return res.status(500).send({ err: 'Server error' });
  }
};

// const postNewBillToGroup = async (req, res) => {
//   const newBillSchema = Joi.object({
//     group_id: Joi.number().required(),
//     amount: Joi.number().required(),
//     description: Joi.string().min(1).max(500).required(),
//   });

//   let userInput = req.body;

//   try {
//     userInput = await newBillSchema.validateAsync(userInput);
//   } catch (err) {
//     return res
//       .status(400)
//       .send({ err: 'Incorrect parameters, please try again' });
//   }

//   try {
//     const query = `INSERT INTO sb_bills (group_id, amount, description) VALUES (${mysql.escape(
//       userInput.group_id,
//     )}, ${mysql.escape(userInput.amount)}, ${mysql.escape(
//       userInput.description,
//     )})`;
//     const con = await mysql.createConnection(dbConfig);
//     const [data] = await con.execute(query);
//     await con.end();

//     return data.affectedRows > 0
//       ? res.send({ msg: 'Bill added successfully' })
//       : res.status(400).send({ err: "Bill wasn't added, please try again" });
//   } catch (err) {
//     return res.status(500).send({ err: 'Server error' });
//   }
// };

module.exports = { getTweets, postNewTweet };
