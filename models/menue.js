const mongoose=require('mongoose');
const menue = new mongoose.Schema({
    name : {
        type:String,
        required: true,
    },
    price :{
        type : Number,
        required:true,
    },
    taste : {
        type : String,
        enum : ['sweet','spicy','sour'],
        required:true,
    },
    is_drink : {
        type : Boolean,
        default : false,
    },
    ingredients : {
        type : [String],
        default : [],
    }

});
const Menu = mongoose.model('Menu',menue);
module.exports=Menu;