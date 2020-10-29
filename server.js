const express = require('express')

let mongoose = require('mongoose');

let bodyParser = require('body-parser');
let cors =require('cors');

let Registration = require('./models/registration');
let Manuscript = require('./models/manuscript');

// ******** DB Connection ********
mongoose.Promise = Promise;

let dbOptions = {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, auto_reconnect: true};

mongoose.connect("mongodb+srv://fsrti:fsrti@cluster0.g5swe.mongodb.net/eps?retryWrites=true&w=majority", dbOptions);


mongoose.connection.on('connected', function(){

    console.log("Connected to DB");

})

mongoose.connection.on('error', function(err){

    console.log("Error while connecting to DB: " + err);

})

// ******** DB Connection ********







const app = express()

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false })) 

// parse application/json

app.use(bodyParser.json())
app.use(cors());






// ******** Backend Routes *********

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register', (req, res) => {
   
  var userData = req.body;
  
  var user = new Registration(userData);
  user.save((err, newuser) => {
      if (err)
      res.json({success:false, msg: 'failed to register user'});
    
  });
});

app.post('/manuscript',(req,res)=>{
    var manuscriptData = req.body;
    var manuscript=new Manuscript(manuscriptData);
    manuscript.save((err, newuser) => {
        if (err)
        res.json({success:false, msg: 'failed to write in manuscript'});
        else
        res.status(200).send(newuser);
    });

});










// ******** Backend Routes *********









// ******* Express Server **********


const port = process.env.PORT||3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))