const express = require('express');
const app = express();
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
//import controllers
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image')

//get database
const db = knex({
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: true
    }
  });

// db.select('*').from('users').then(data => {
//   console.log(data);
// });

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=> {
    res.send('WorkZ');
})

app.post('/signin', signin.handleSignin(db, bcrypt))
//register
app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt)})
//user
app.get('/profile/:id', (req, res) => {profile.handleProfileGet(req, res, db)})
//image
app.put('/image', (req, res) => {image.handleImage(req, res, db)})
app.post('/imageurl', (req, res) => {image.handleApiCall(req, res)})

//set local port
app.listen(process.env.PORT || 8080, () => {
    console.log(`app is running on port ${process.env.PORT}`)
})


// 1. Package.json: Works with both "scripts": 
// "start:" Node server.js & Nodemon server.js 
// --BUT Only IF You have PROCFILE: web: node server.js
// 2. It MUST have in Engines inlcuded NODE Version. 

/*
API : 

--> res = this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userID --> GET = user
/image --> PUT = user/count

*/