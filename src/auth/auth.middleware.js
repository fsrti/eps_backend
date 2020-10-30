const users = require('./auth.schema')
const bodyParser = require('body-parser')
const mongoose = require('../db/connection')
const app = require('../app')
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())
app.use(mongoose);
const findUser = (defaultLoginError, isError, errorCode = 422) => async (req, res, next) => {
    try {
      const user = await users.findOne({
        username: req.body.username,
      });
      if (isError(user)) {
        res.status(errorCode);
        next(new Error(defaultLoginError));
      } else {
        req.loggingInUser = user;
        next();
      }
    } catch (error) {
      res.status(500);
      next(error);
    }
  };
module.exports={
    findUser
}