import React, { useState } from 'react';

import "./addteddy.css";
import Navbar from "../../Components/Nav/Nav";
import Footer from "../../Components/Nav/Footer";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function AddTeddy() {



  const history = useNavigate();
  const[inputs,setInputs] = useState({
    
    itemname:"",
    getprice:"",
    sellprice:"",
    pices:"",
    date:"",
  });
  const handleChange =(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(()=>history('/Home'));
  }

  const sendRequest = async()=>{
    await axios.post("http://Localhost:5000/items",{
      
      itemname:String(inputs.itemname),
      getprice:Number(inputs.getprice),
      sellprice:Number(inputs.sellprice),
      pices:Number(inputs.pices),
      date:String(inputs.date),
    })
    
  }
  return (
    <div className="addwrapper">
        <Navbar/>
        <div className='addetails'> 
        <div className='image'>
            <img src='./Images/panda.jpg'>
            </img>
            
        </div>
        <div className='details clearfix'>
            <form onSubmit={handleSubmit} >
            <h4>Upload Teddy Image :</h4><br/>
            <input type='file' name="img" ></input>
                <h4>Item Name :</h4><br/>
                <input type='text' name="itemname"onChange={handleChange} value={inputs.itemname}></input>
                <h4>Gett Price  :</h4>
                <input type='text' name="getprice" onChange={handleChange} value={inputs.getprice}></input>
                <h4>Sell Price  :</h4><br/>
                <input type='text' name="sellprice" onChange={handleChange} value={inputs.sellprice}></input>
                <h4>Pices :</h4><br/>
                <input type='text' name="pices"  onChange={handleChange} value={inputs.pices}></input>
                <h4>Date :</h4><br/>
                <input type='text' name="date" onChange={handleChange} value={inputs.date}></input><br/>

                <button type='submit'>Sumbit</button>
            </form>
            
        </div>
        
        </div>


        <Footer/>
        
      
    </div>
    
  )
}

export default AddTeddy
