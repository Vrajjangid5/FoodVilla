import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {Array(15).fill("").map((_, index) => (
        <div key={index} className="shimmer-card w-full h-64 bg-gray-300 animate-pulse rounded-lg"></div>
      ))}
    </div>
  );
};

export default Shimmer;
