const mysql = require('mysql2/promise');

const { dbConfig } = require('../../config');

const getTweetsCount = async (req, res) => {
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

module.exports = {
  getTweetsCount,
};
