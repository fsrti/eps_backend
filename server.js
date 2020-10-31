let bodyParser = require('body-parser');
let cors =require('cors');

let User = require('./src/auth/user');
let Manuscript = require('./models/manuscript');
const app = require('./src/app');


// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false })) 

// parse application/json

app.use(bodyParser.json())
app.use(cors());






// ******** Backend Routes *********

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/signup', (req, res) => {
   
  var userData = req.body;
  
  var user = new User(userData);
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



app.get('/', (req, res) => res.send('Hello World!'))

const port = process.env.PORT||3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))