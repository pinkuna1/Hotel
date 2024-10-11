require('dotenv').config();
const mongoose=require('mongoose');
const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL);
const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongodb server');
});
db.on('error',(err)=>{
    console.error('mongodb connection error :',err);
});
db.on('disconnected',()=>{
    console.log('mongodb disconnected');
});
module.exports= db;