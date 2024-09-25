
import React, { useEffect, useState } from "react";
import Item from "./DisplayTeddies"
import axios from "axios";

const URL = "http://Localhost:5000/items"

const fetchHandler = async ()=>{
    return await axios.get(URL).then((res)=>res.data);
}

function TeddyBares(props) {
   

    const [items,setItems]= useState();

    useEffect(()=>{
        fetchHandler().then((data)=>setItems(data.items));
    },[])
  return (
    <div>

        <div>
            {items && items.map((item,i)=>(
                <div key = {i}>
                    <Item item ={item}/>
                    </div>
            ))}
        </div>
 
        
      
    </div>
  )
}

export default TeddyBares
