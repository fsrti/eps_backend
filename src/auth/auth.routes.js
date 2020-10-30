const express = require('express');

const controller = require('./auth.controller');
const middlewares = require('./auth.middlewares');

const router = express.Router();
// any route in here is pre-pended with /auth

const defaultLoginError = 'hello world';
const signInError = 'That username is not unique. Please choose another one.';
var bodyParser = require('body-parser')

// create application/json parser

var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', controller.get);
router.post(
  '/signup',jsonParser,
  //middlewares.validateUser(),
 middlewares.findUser(signInError, (user) => user, 409),
  controller.signup,
);
router.post(
  '/login',jsonParser,
 // middlewares.validateUser(defaultLoginError),
  middlewares.findUser(defaultLoginError, (user) => !(user)),
  controller.login,

);

module.exports = router;