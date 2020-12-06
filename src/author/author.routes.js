const express = require('express');

 const controller = require('./author.controller');
// const middlewares = require('./auth.middlewares');
const authmiddlewares = require('../auth/auth.middlewares');
const router = express.Router();
var bodyParser = require('body-parser')

// create application/json parser

var jsonParser = bodyParser.json()


router.get('/', controller.get);
// router.use(authmiddlewares.checkTokenSetUser);
router.post(
  '/newsubmission',jsonParser,
 authmiddlewares.checkTokenSetUser,
  authmiddlewares.isLoggedIn,
  controller.newsubmissionData,

);



module.exports = router;