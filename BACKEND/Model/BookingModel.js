const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const bookingSchema = new Schema ({
    name : {
        type:String,
        required:true,
    },
    phonenumber :{
        type : Number,
        required:true,

    },
    email : {
        type : String,
        required:true,
    },
    date : {
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,

    }
});

module.exports  = mongoose.model("bookingmodels",bookingSchema)