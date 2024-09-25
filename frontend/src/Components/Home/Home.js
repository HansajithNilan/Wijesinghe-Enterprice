import React from "react";
import "./Home.css";
import Navbar from "../Nav/Nav";
import Footer from "../Nav/Footer";

function Home() {
  return (
    <div className="webpage">
      <Navbar />

      <div className="intro clearfix">
        <div className="image">
          <img src="./Images/Taddy.jpg"></img>
          
        </div>
        <div className="shop-name">
          <h1>Wijesignhe Online Store</h1>
          <p>
            At Daddy Bares, we believe that the right carpet can completely
            transform a Vehicle. Explore our wide selection of designs, colors,
            and textures to find the perfect match for your unique taste and
            décor
          </p>
          <button type="submit">Register</button>
          <button type="submit">Login</button>
        </div>
      </div>

      <h1 className="h1">Top Categorise</h1>
      <div className="top-catogery clearfix">
        <div className="Category">
          <h2>Taddy Bares</h2>
          <img src="./Images/taddy3.jpg"></img>
          <h4>
            Brown Taddy is a warm, lovable character with a cozy appearance,
            known for their gentle nature and comforting presence.
          </h4>
        </div>
        <div className="Category">
          <h2>Plastic Things</h2>
          <img src="./Images/Plastic.jpg"></img>
          <h4>
            Plastic things are versatile, lightweight, and durable items made
            from synthetic materials, often used in everyday products and
            packaging.
          </h4>
        </div>
        <div className="Category">
          <h2>carpet</h2>
          <img src="./Images/capat.jpeg"></img>
          <h4>
            Carpat things are durable, handcrafted items often made from natural
            materials, known for their quality and traditional craftsmanship.
          </h4>
        </div>
        <div className="Category">
          <h2>Toys</h2>
          <img src="./Images/Toys.jpg"></img>
          <h4>
            Toys are playful objects designed for children's entertainment and
            learning, fostering creativity, imagination, and skill development
            through interactive fun.
          </h4>
        </div>
      </div>

      <div className="description clearfix">
        <div className="text">
          <p>
            We are committed to offering high-quality carpets at competitive
            prices, ensuring that every customer finds exactly what they need
            for their space. Our extensive range includes everything from
            luxurious wool options that add a touch of elegance to your home, to
            durable synthetics designed to withstand high traffic areas. No
            matter your budget or style preference, we guarantee that you won’t
            have to compromise on style or comfort with our diverse selection.
          </p>
        </div>
        <div className="image2">
          <img src="./Images/taddy5.jpg"></img>
        </div>
      </div>
    <div className="Thanks">
      <h2>Thanks For Choosing Wijesinghe Onilne Store !</h2>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
