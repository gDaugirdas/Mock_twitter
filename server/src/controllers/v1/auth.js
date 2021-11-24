const mysql = require('mysql2/promise');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { userRegisterSchema, userLoginSchema } = require('../../schemas');

const { dbConfig, jwtSecret } = require('../../config');

const postRegister = async (req, res) => {
  let userInput = req.body;

  try {
    userInput = await userRegisterSchema.validateAsync(userInput);
  } catch (err) {
    return res
      .status(400)
      .send({
        err: err.details[0]?.message || 'Unkown error, please contact support',
      });
  }

  const encryptedPassword = await bcrypt.hash(userInput.password, 10);

  const query = `INSERT INTO bf_users (first_name, last_name, email, password) VALUES (${mysql.escape(
    userInput.first_name,
  )}, ${mysql.escape(userInput.last_name)}, ${mysql.escape(
    userInput.email,
  )}, '${encryptedPassword}')`;

  try {
    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(query);
    await con.end();

    return data.affectedRows > 0
      ? res.send({ msg: 'success' })
      : res
          .status(400)
          .send({ err: 'User was not created, please contact support' });
  } catch (err) {
    if (err.errno === 1062) {
      return res
        .status(400)
        .send({ err: 'User with this email already exists' });
    }
    return res.status(500).send({ err: 'Server error' });
  }
};

const postLogin = async (req, res) => {
  let userInput = req.body;

  try {
    userInput = await userLoginSchema.validateAsync(userInput);
  } catch (err) {
    return res
      .status(400)
      .send({
        err: err.details[0]?.message || 'Unkown error, please contact support',
      });
  }

  const query = `SELECT * FROM bf_users WHERE email = ${mysql.escape(
    userInput.email,
  )} LIMIT 1`;

  try {
    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(query);

    if (data.length === 0) {
      return res
        .status(400)
        .send({
          err: 'No user found with this email, please try again or create a new account',
        });
    }

    const isAuthed = bcrypt.compareSync(userInput.password, data[0].password);

    const token = jwt.sign(
      {
        id: data[0].id,
        email: data[0].email,
        first_name: data[0].first_name,
        last_name: data[0].last_name,
        created_at: data[0].created_at,
      },
      jwtSecret,
      {
        expiresIn: '24h',
      },
    );

    return isAuthed
      ? res.send({ token })
      : res.status(400).send({ err: 'Invalid password' });
  } catch (err) {
    return res.status(500).send({ err: 'Server error' });
  }
};

module.exports = { postRegister, postLogin };
