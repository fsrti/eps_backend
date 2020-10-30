const express = require('express');
const app = express();
const cors =require('cors')
const auth = require('./auth/auth.routes');
app.use(cors());
app.use(
    '/auth',
    auth,
  );
  module.exports = app;