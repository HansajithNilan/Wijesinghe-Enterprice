import React, { useState } from "react";


import "./addbooking.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddBookings() {

  const history = useNavigate();
  const [inputs,setInputs] = useState({
    name:"",
    phonenumber:"",
    email:"",
    date:"",
    address:"",
  });
  const handleChange =(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(()=> history('/'))
  }

  const sendRequest = async()=>{
    await axios.post("http://Localhost:5000/bookings",{
      name :String (inputs.name),
      phonenumber:Number (inputs.phonenumber),
      email:String (inputs.email),
      date:String(inputs.date),
      address:String(inputs.address),

    })
  }

  return (
    <div className="wrapper">
      <div className="booking">
        <div className="img">
            <img src="./Images/Toys.jpg"></img>

        </div>
        <div className="form">
            <form onSubmit={handleSubmit}>
                <h5>Name :</h5>
                <input type="text"  name="name" onChange={handleChange} value={inputs.name}></input>
                <h5>Phonenumber :</h5>
                <input type="text" name="phonenumber" onChange={handleChange} value={inputs.phonenumber}></input>
                <h5>Email :</h5>
                <input type="text" name="email" onChange={handleChange} value={inputs.email}></input>
                <h5>Date :</h5>
                <input type="text" name="date" onChange={handleChange} value={inputs.date}></input>
                <h5>Address :</h5>
                <textarea type="text" name="address" onChange={handleChange} value={inputs.address}></textarea><br/>
                <button type="sumbit" >Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default AddBookings;
