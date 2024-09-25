import React from "react";
import "./DisplayTeddies.css";
import NavBar from "../Nav/Nav";
import Footer from "../Nav/Footer"




function DisplayTeddies(props) {

    
   
    
  return (
    <div className="wrapper clearfix">
      <NavBar />
      <h1>Teddy Bares </h1>
      <div className="category clearfix">
      <div className="sub-category">
            <h2>Brown Teddy : </h2>
         
        
      </div>
      <div className="sub-category">
        <h2>Black Teddy </h2>
        <p></p>
      </div>
      <div className="sub-category">
        <h2>Yello Teddy </h2>
      </div>
      <div className="sub-category">
        <h2>Pink Teddy </h2>
      </div>

    </div>
    
   
   
    <Footer/>
    </div>
  );
}

export default DisplayTeddies;
