//kaveeshacapat1234

const express = require ("express");
const mongoose = require("mongoose");
const router  = require("./Route/ItemRoute")
const bookingrouter = require("./Route/BookingRoute")


const app = express()
const cors = require("cors");


//Middleware //
app.use(express.json());
app.use(cors());
app.use("/items",router)
app.use("/bookings",bookingrouter)


mongoose.connect("mongodb+srv://shopadmin:kaveeshacapat1234@reactlearn.l4gbufx.mongodb.net/")
.then(()=> console.log("MongoDB Connection Successfull"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=> console.log((err)));
