import React from "react";
import { IMG_CDN_URL } from "../contants";

function RestroCard({ name, cloudinaryImageId, cuisines, avgRating, availability }) {
  return (
    <div className="Card w-[230px] p-2 m-2 shadow-xl rounded-md bg-white">
      <img
        className="rounded-t-md"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <h3 className="text-gray-600">{cuisines.join(", ")}</h3>
        <h4 className="font-semibold text-yellow-500">{avgRating} ⭐</h4>
        <h3 className="text-sm text-gray-500">{availability.opened ? "Opened" : "Closed"}</h3>
      </div>
    </div>
  );
}

export default RestroCard;
