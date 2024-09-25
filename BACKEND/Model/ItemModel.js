const mongoose =  require("mongoose")
const Schema = mongoose.Schema;


const itemSchema  =  new Schema ({
  
    itemname : {
        type:String,
        required: true,
    },
    getprice :{
        type:Number,
        required: true,
    },
    sellprice :{
        type:Number,
        required : true,
    },
    pices:{
        type:Number,
        required:true,
    
    },
    date :{
        type:String,
        required:true,

    }
});



    module.exports = mongoose.model("itemmodels",itemSchema)
