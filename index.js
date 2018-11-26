const express =  require('express')
 const app = express();
 const mongoose = require('mongoose')
 const bodyParser = require('body-parser');
 const user = require('./userController')


 app.get('/', (req,res) => {
res.status(200).send('Running')
 })


//  app.post('/createuser', user.signup ,(req,res) => {
//     res.status(200).send('Running')
//      })

// app.post('/createuser', user.signup ,function(req, res){
//    res.status(200).send('Running')
//     });
 app.post('/createuser', function(req, res){
   user.signup
   res.status(200).send('Running')
    });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


 mongoose.connect("mongodb://localhost:27017/dms",{
    useMongoClient : true
 });

 app.listen(3333)