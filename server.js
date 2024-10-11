const express = require('express')
const app = express()
const db = require('./db');
require('dotenv').config();



const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT||3000;




// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req,res)=> {
  res.send('hello world');
})


const personRouter =require ('./routes/personRouter');
const menuItemRoutes = require('./routes/menuItemRouter');

app.use('/menue',menuItemRoutes);
app.use('/person',personRouter);

app.listen(PORT,()=>{
  console.log('listening on port 3000');
})