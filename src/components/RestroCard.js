import React from "react";
import { IMG_CDN_URL } from "../contants";
import { Link } from "react-router-dom";


function RestroCard({
    name, cloudinaryImageId, cuisines, avgRating,availability
}) {
    return (
        <div className="Card">
            <img
                src={IMG_CDN_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>
                {cuisines.join(" , ")}
            </h3>
            <h4>{avgRating}⭐</h4>
        <h3>{(availability.opened===true)?"opened":"close"}</h3>


            <p></p>
        </div>
    );
}
export default RestroCard;