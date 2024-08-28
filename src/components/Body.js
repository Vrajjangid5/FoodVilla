import React, { useEffect, useState } from "react";
import { restorent_list } from "../contants";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { FilterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";


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
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.797977&lng=75.8192578&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setALLRestronentes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
      setALLFilteredRestronentes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
  } catch (error) {
      console.error("Failed to fetch restaurants", error);
      setALLRestronentes([]);
      setALLFilteredRestronentes([]);
  }
}

const isOnline=useOnline();
if(!isOnline){
    return <h1>You are offline</h1>
}

  return ALLrestronentes?.length === 0 ? <Shimmer /> : (
      <>
          <div className="search-container p-5 bg-gray-300 my-5">
              <input
                  type="text"
                  className="focus:bg-neutral-600 p-2 m-2 text-white rounded-md"
                  placeholder="search"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
              />
              <button
                  className="search-btn p-2 m-2 bg-purple-900 text-white hover:bg-orange-700 rounded-lg "
                  onClick={() => {
                      const data = FilterData(searchInput, ALLrestronentes);
                      setALLFilteredRestronentes(data);
                  }}
              >
                  search
              </button>
          </div>
          <div className="restronent-list flex flex-wrap">
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
