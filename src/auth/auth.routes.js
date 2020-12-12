const express = require('express');

const controller = require('./auth.controller');
const middlewares = require('./auth.middlewares');

const router = express.Router();
// any route in here is pre-pended with /auth

const defaultLoginError = 'Unable to Login';
const signInError = 'That username is not unique. Please choose another one.';
var bodyParser = require('body-parser')

// create application/json parser

var jsonParser = bodyParser.json()



router.get('/', controller.get);
router.post(
  '/signup', jsonParser,
  middlewares.findUser(signInError, (user) => user, 409),
  controller.signup,
);
router.post(
  '/login', jsonParser,
  middlewares.findUser(defaultLoginError, (user) => !(user)),
  controller.login,

);
router.get('/search/:username', jsonParser,
  middlewares.findId(defaultLoginError, (user) => !(user))
);


module.exports = router;