const express = require('express');
const cors = require('cors');

const { port } = require('./config');

const app = express();

app.use(express.json());
app.use(cors());

const {
  auth,
  tweets,
  tweetsCount,
  tweetsLike,
  comments,
  user,
  userPictures,
} = require('./routes/v1');

app.use('/v1/api/auth', auth);
app.use('/v1/api/tweets/count', tweetsCount);
app.use('/v1/api/tweets/like', tweetsLike);
app.use('/v1/api/tweets', tweets);
app.use('/v1/api/comments', comments);
app.use('/v1/api/user', user);
app.use('/v1/api/user/pictures', userPictures);

app.get('/', (req, res) => res.send({ msg: 'Version 1.0.0' }));

app.all('*', (req, res) => {
  res.status(404).send({ err: 'Not found' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
