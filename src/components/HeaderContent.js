import React, { useState } from 'react'
import logoo from "../assets/img/logoo.jpeg"
import { Link } from 'react-router-dom';

const Heading=()=>(
   <Link to="/">
        <img 
    alt="logo"
    className="h-28 pl-2"
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

    <div className="flex justify-between bg-gray-300 shadow-lg">
        <Heading/>
        <div className="nav-items">
            <ul className='flex py-10'>  <Link>
                <li className='px-2'>Home</li>
                </Link>
                <Link to="/about">
                    <li className='px-2'>About</li>
                </Link>
                
                <Link to="/contact"><li className='px-2'>Contact</li></Link>
                <Link to="/instamart"><li className='px-2'  >Cart</li></Link>
                
            </ul>


        </div>

        {
        (isLogin)?<button onClick={()=>setLogin(false)}>LogOut</button>:<button onClick={()=>setLogin(true)}>Log In</button> 
        }

    </div>
);}
export default HeaderContent;




