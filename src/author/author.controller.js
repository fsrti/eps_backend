const Newsubmission = require('./newsubmission');
const get = (req, res) => {
    res.json({
      message: 'Hello Author! 🔐',
    });
  };

  const newsubmissionData = async (req, res, next) => {
    try {
   
    req.body.userId=req.userId;
    console.log(`user id`+req.body.userId);
    let newsubmission = new Newsubmission(req.body);
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

  module.exports = {
    get,
    newsubmissionData
  };