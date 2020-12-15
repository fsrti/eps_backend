const Newsubmission = require('./newsubmission');
const NewFilesubmission = require('./newfilesubmission');
const cloudinary=require("../utilities/cloudinary");
 const upload = require("../utilities/multer");
 const { any } = require('../utilities/multer');

const get = (req, res) => {
    res.json({
      message: 'Hello Author! 🔐',
    });
  };


  const newsubmissionData = async (req, res, next) => {
    
    try {
    req.body.userId=req.userId;
    console.log(`user id`+req.body.userId);
    //let result;
    let newsubmission = new Newsubmission(req.body);
     console.log(`data`+newsubmission);
    newsubmission.save((err, newuser) => {
        if (err)
        { 
        console.log(err)
        res.json({success:false, msg: 'failed to register user'});
        }
        else
        {
          res.json({success:true});
        }
    }); 
    } catch (error) {
      res.status(500);
      next(error);
    }
    
  };

  const newfilesubmissionData = async (req, res, next) => {
    
    try {
    req.body.userId=req.userId;
    console.log(`user id`+req.body.userId);
    let result;
    if(req.file)
     result = await cloudinary.uploader.upload(req.file.path);
    else
    console.log(`upload plzzz`);
    console.log(`result`+result);
    delete req.body.image;
    let newfilesubmission = new NewFilesubmission({
      avatar : result.secure_url,
      cloudinary_id: result.public_id,
    });
       console.log(`data`+newfilesubmission);
    newfilesubmission.save((err, newuser) => {
        if (err)
        { 
        console.log(err)
        res.json({success:false, msg: 'failed to register user'});
        }
        else
        {
          res.json({success:true});
        }
    }); 
    } catch (error) {
      res.status(500);
      next(error);
    }
    

  };
  module.exports = {
    get,
    newsubmissionData,
    newfilesubmissionData
  };