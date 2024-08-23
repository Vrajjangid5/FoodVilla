import React, { useState } from 'react'
import logoo from "../assets/img/logoo.jpeg"
import { Link } from 'react-router-dom';

const Heading=()=>(
   <Link to="/">
        <img 
    alt="logo"
    className="logo"
    // src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0" />
    src={logoo}
    />
    </Link>
);

const LogedInUser=()=>{
    return true;
}


const HeaderContent=()=>
{

const [isLogin,setLogin]=useState(false);
return (

   


    <div className="header">
        <Heading/>
        <div className="nav-items">
            <ul>
                <Link>
                <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                
                <Link to="/contact"><li>Contact</li></Link>
                <Link><li>Cart</li></Link>
                
            </ul>


        </div>

        {
        (isLogin)?<button onClick={()=>setLogin(false)}>LogOut</button>:<button onClick={()=>setLogin(true)}>Log In</button> 
        }

    </div>
);}
export default HeaderContent;




