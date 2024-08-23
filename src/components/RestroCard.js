import React from "react";
import { IMG_CDN_URL } from "../contants";
import { Link } from "react-router-dom";


const RestroCard=({
    name,
    cloudinaryImageId,
    cuisines,
    avgRating
})=>{
    return(
        <div className="Card">
            <img
            src={IMG_CDN_URL+cloudinaryImageId}

            />
            <h2>{name}</h2>
            <h3>
            {cuisines.join(",")} 
            </h3>
            <h4>{avgRating}⭐</h4>
        </div>
    );
}
export default RestroCard;