import React, { useEffect, useState } from "react";
import { restorent_list } from "../contants";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchInput,restronentes){
    return restronentes.filter((restro)=>restro?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase()));
}


const Body = () => {
  const [ALLrestronentes, setALLRestronentes] = useState([]);
  const [ALLFilterdrestronentes, setALLFilteredRestronentes] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
      getRestaurats();
  }, []);

//   async function getRestaurats() {
//       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
//       const json = await data.json();
//       // setALLRestronentes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
//       // setALLFilteredRestronentes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
//       setALLRestronentes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
// setALLFilteredRestronentes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);

//   }
async function getRestaurats() {
  try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setALLRestronentes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
      setALLFilteredRestronentes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
  } catch (error) {
      console.error("Failed to fetch restaurants", error);
      setALLRestronentes([]);
      setALLFilteredRestronentes([]);
  }
}


  return ALLrestronentes.length === 0 ? <Shimmer /> : (
      <>
          <div className="search-container">
              <input
                  type="text"
                  className="search-input"
                  placeholder="search"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
              />
              <button
                  className="search-btn"
                  onClick={() => {
                      const data = filterData(searchInput, ALLrestronentes);
                      setALLFilteredRestronentes(data);
                  }}
              >
                  search
              </button>
          </div>
          <div className="restronent-list">
              {ALLFilterdrestronentes.map((resttorent) => (
                  <Link to={"/restaurant/" + resttorent.info.id} key={resttorent.info.id}>
                      <RestroCard {...resttorent.info} />
                  </Link>
              ))}
          </div>
      </>
  );
}
export default Body;
