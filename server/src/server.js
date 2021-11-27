const express = require('express');
const cors = require('cors');

const { port } = require('./config');

const app = express();

app.use(express.json());
app.use(cors());

const { auth, like, tweets, profile } = require('./routes/v1');

app.use('/v1/api/auth', auth);
app.use('/v1/api/tweets', tweets);
app.use('/v1/api/tweets/like', like);
app.use('/v1/api/profile', profile);

app.get('/', (req, res) => res.send({ msg: 'Version 1.0.0' }));

app.all('*', (req, res) => {
  res.status(404).send({ err: 'Not found' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
