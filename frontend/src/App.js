import "./App.css";
import React from "react";
import {BrowserRouter,Route, Routes} from "react-router-dom"



import Home from "./Components/Home/Home";
import Navbar from "./Components/Nav/Nav";
import Footer from "./Components/Nav/Footer";
import Teddy from "./Components/TeddyBares/TeddyBares";
import AddTeddy from "./Admin/AddTeddy/AddTeddy";
import Inventory from "./Admin/DisplayItems/DisplayInventory";
import UpdateItem from "./Admin/UpdateItems/UpdateItems";
import AddBooking from "./Components/AddBooking/AddBookings";
import DisplayBookings from "./Admin/DisplayBookings/AllBookings";
{/*Nilan*/}


function App() {
  return (
    <div>
      
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/AddTeddy" element={<AddTeddy/>}/>
        <Route path = "/Teddy" element={<Teddy/>}/>
        <Route path = "/Inventory" element={<Inventory/>}/>
        <Route path = "/Inventory/:id" element={<UpdateItem/>}/>
        <Route path = "/addbooking" element={<AddBooking/>}/>
        <Route path = "/view-booking" element={<DisplayBookings/>}/>
        </Routes>
        
      
    </div>
  );
}

export default App;
