const express = require('express');
const router = express.Router();
const menue = require('./../models/menue');

router.post('/',async(req,res)=>{
    try {
      const data = req.body
      const newMenue = new menue(data);
      const response = await newMenue.save();
  
      console.log('data saved');
      res.status(200).json(response);
    }catch(err){
       console.log(err);
       res.status(500).json({error:'internal server error'});
    }
  })
  
 
  router.get('/',async(req,res)=>{
    try {
      const data =await menue.find();
      res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
    }
  })
  module.exports = router;