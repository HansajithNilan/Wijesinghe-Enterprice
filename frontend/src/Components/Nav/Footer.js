import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer ">
          <div className="experience clearfix">
              <h2>Digital experience is always embedded in a physical experience</h2>
          </div>
          <div className="experience clearfix ">
          <h2>Services</h2><br/>
          <ul>
            <li>
            <h5>Teddy Bares Selling</h5></li>
            <li><h5>Carpat Bares Selling</h5></li>
            <li><h5>Folower Wass Selling</h5></li>
            <li>  <h5>Toys Selling</h5></li>
           <li> <h5>Plastic Things Selling</h5></li>
           <li> <h5>in bulk</h5></li>
              
              
            
          </ul>
          </div>
          <div className="experience  clearfix">
            <h2>Follow Us</h2>
            <ul><br/>
              <li><a href="">Facebook</a></li><br/>
              <li><a href="">Instergram</a></li><br/>
              <li><a href="">Likedn</a></li><br/>
              <li><a href="">Twitter</a></li><br/>
              
            </ul>
            

          </div>
          <div className="experience clearfix">
          <h2>Contact Us</h2>
          <form action="" class="contact">
            <input type="text" name = "name" placeholder="Name"></input><br/>
            <input type="email" name = "email" placeholder="Email"></input>
            <textarea type="text" id ="" cols="30" rows ="5" name="message" placeholder="Message"></textarea>
          </form>
          
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
