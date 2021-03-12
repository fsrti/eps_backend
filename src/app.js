const express = require('express');
const app = express();
const cors =require('cors')
const auth = require('./auth/auth.routes');
const author = require('./author/author.routes');
app.use(cors());
app.use(
    '/auth',
    auth,
  );
  app.use(
    '/author',
    author,
  );
  module.exports = app;
