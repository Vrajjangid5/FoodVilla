import React, { useState } from "react";
import logoo from "../assets/img/logoo.jpeg";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import Store from "../utils/Store";

const Heading = () => (
  <Link to="/">
    <img
      data-testid="logo"
      alt="logo"
      className="h-28 pl-2"
      src={logoo}
    />
  </Link>
);

const HeaderContent = () => {
  const [isLogin, setLogin] = useState(false);

  const cartItem=useSelector(store=>store.cart.items);
  console.log(cartItem)

  return (
    <div className="flex justify-between items-center bg-gray-300 shadow-lg px-4 py-2">
      <Heading />
      <div className="nav-items">
        <ul className="flex space-x-4">
          <Link to="/"><li className="px-2">Home</li></Link>
          <Link to="/about"><li className="px-2">About</li></Link>
          <Link to="/contact"><li className="px-2">Contact</li></Link>
          
          <Link to="/instamart"><li className="px-2">InstaMart</li></Link>
          <Link to="/cart"><li className="px-2" data-testid="cartt">Cart {cartItem.length} items</li></Link> 
        </ul>
      </div>
      <button
        onClick={() => setLogin(!isLogin)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isLogin ? "Log Out" : "Log In"}
      </button>
    </div>
  );
};

export default HeaderContent;
