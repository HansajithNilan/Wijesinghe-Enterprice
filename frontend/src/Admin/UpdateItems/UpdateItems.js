import React,{useEffect,useState} from 'react'
import axios from'axios';
import {useParams} from 'react-router';
import {useNavigate} from 'react-router'
import "./UpdateItems.css"
import Navbar from "../../Components/Nav/Nav";
import Footer from "../../Components/Nav/Footer";



function UpdateItems() {
    const[inputs,setInputs] = useState ({
        
    });
    const history = useNavigate();
    const id = useParams().id;

    useEffect (() =>{const fetchHandler = async ()=>{
        await axios
        .get(`http://localhost:5000/items/${id}`)
        .then((res)=> res.data)
        .then((data)=> setInputs(data.items));
    }; 
    fetchHandler();

    },[id]);

    const sendRequest = async ()=>{
        await axios.put(`http://localhost:5000/items/${id}`,{
    itemname:String(inputs.itemname),
      getprice:Number(inputs.getprice),
      sellprice:Number(inputs.sellprice),
      pices:Number(inputs.pices),
      date:String(inputs.date),
        })
        .then((res)=> res.data);
    }
    const handleChange =(e)=>{
        setInputs((prevState)=>({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
    
      const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(()=>history('/Inventory'));
      }
  return (
    <div className="addwrapper">
    <Navbar/>
    <div className='addetails'> 
    <div className='image'>
        <img src='../Images/panda.jpg'>
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

export default UpdateItems