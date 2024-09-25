const Booking = require("../Model/BookingModel");


const getAllbookings = async (req,res,next)=>{
    let bookings;

    try {
        bookings = await Booking.find()
    }catch (err){
        console.log(err);
    }
    //not found

if (!bookings){
    return res.status(404).json({message : "Booking not Found"})
}
//display all users
return res.status(200).json({bookings});
}


const addbookings = async (req,res,next)=>{
    const{name,phonenumber,email,date,address} = req.body;

    let bookings;

    try {
        bookings = new Booking ({name,phonenumber,email,date,address});
        await bookings.save();
    }catch (err){
        console.log(err);
    }
    //not insert data
    if(!bookings){
        return res.status(404).json({message:"Booking not Insert"})
    }
    return res.status(200).json({bookings});
    
}

//data  retrive

const getById = async(req,res,next)=>{
    const id = req.params.id;

    let bookings;

    try{
        bookings = await Booking.findById(id);

    }catch (err){
        console.log(err);
    }
    if(!bookings){
        return res.status(404).json({message:"Booking Not Found"})
    }
    return res.status(200).json ({bookings});
}

const updateBookings = async(req,res,next)=>{
    const id =  req.params.id;
    const {name,phonenumber,email,date,address} =req.body;

    let bookings;

    try{
        bookings = await Booking.findByIdAndUpdate(id,{name:name,phonenumber:phonenumber,email:email,date:date,address:address});
        bookings = await bookings.save();
    }catch(err){
        console.log(err);
    }
    if(!bookings){
        return res.status(404).json({message:"Item Not Found"});
    }
    return res.status(200).json({bookings});

}
const deleteBooking = async(req,res,next)=>{
    const id = req.params.id;

    let bookings;

    try{
        bookings = await Booking.findByIdAndDelete(id)

    }catch(err){
        console.log(err);
    }
    if(!bookings){
        return res.status(404).json({message:"Unable to delete"})
    }
    return res.status(200).json({bookings})
}


exports.getAllbookings = getAllbookings;
exports.addbookings=addbookings;
exports.getById =getById;
exports.updateBookings =updateBookings;
exports.deleteBooking = deleteBooking;