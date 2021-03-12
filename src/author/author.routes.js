const express = require('express');
const upload=require("../utilities/multer");
const controller = require('./author.controller');
const authmiddlewares = require('../auth/auth.middlewares');
const router = express.Router();
var bodyParser = require('body-parser')

// create application/json parser

var jsonParser = bodyParser.json()


router.get('/', controller.get);


router.post(
  '/newsubmission', jsonParser,
  authmiddlewares.checkTokenSetUser,
  authmiddlewares.isLoggedIn,
  controller.newsubmissionData,
);
router.post(
  '/newfilesubmission', jsonParser,upload.single("image"),
  controller.newfilesubmissionData,
);

router.post(
  '/articlefilesubmission', jsonParser,upload.single("article"),
  controller.articleFileSubmission,
);
router.post(
  '/articlesubmission', jsonParser,
  controller.articleSubmissionData,
);

module.exports = router;