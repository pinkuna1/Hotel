const mongoose=require('mongoose');

const personSchema = new mongoose.Schema({
    name : {
        type:String,
        required: true
    },
    age :{
        type:Number,
        required: true
    },
    work:{
        type:String,
        enum :['chef','waiter','manager'],
        required: true
    },
    mobile:{
        type:String,
        required: true
       
    },
    emails:{
        type:String,
        required: true,
        unique:true
      
    },
    address : {
        type : String
    }
});
const person = mongoose.model('person',personSchema);
module.exports=person;