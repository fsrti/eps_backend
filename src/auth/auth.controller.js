const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users = require('./user');



const createTokenSendResponse = (user, res, next) => {
  const payload = {
    _id: user._id,
    username: user.username,
    //role: user.role,
    //active: user.active,
  };
  jwt.sign(
    payload,
    '123', {
      expiresIn: '10 years',
    }, (err, token) => {
      if (err) {
        res.status(422);
        const error = Error('Unable to login');
        next(error);
      } else {
      // login all good
        res.json({ token });
      }
    },
  );
};

const get = (req, res) => {
  res.json({
    message: 'Hello Auth! 🔐',
  });
};

const signup = async (req, res, next) => {
  try {
  const hashed = await bcrypt.hash(req.body.password, 12);
  console.log(`hashed `+hashed);
  let userData = req.body;
  userData.password=hashed;
  let user = new users(userData);
     user.save((err, newuser) => {
      if (err)
      res.json({success:false, msg: 'failed to register user'});
      // else
      // res.status(200).json({newuser})
      //createTokenSendResponse(newuser, res, next);

  });
   
    
  } catch (error) {
    res.status(500);
    next(error);
  }
};

const login = async (req, res, next) => {
  console.log(req.body.password);
  console.log(req.loggingInUser.password);
  try {
    const result = await bcrypt.compare(
      req.body.password,
      req.loggingInUser.password,
    );
    console.log(`result`+result);
    if (result) {
      createTokenSendResponse(req.loggingInUser, res, next);
    } else {
      res.status(422);
      throw new Error('Unable to login');
    }
  } 
  catch (error) {
    res.status(res.statusCode === 200 ? 500 : res.statusCode);
    next(error);
  }
};

module.exports = {
  get,
  login,
  signup,
};