import React, { useEffect, useState } from "react";
import RestrurentCard from "./RestrurentCard";
import Shimmer from "./Shimmer";

function Body() {
  const [restrurentData, setRestrurentData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5796842&lng=88.414312&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    //Optional Chaining
    setRestrurentData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredRes = restrurentData.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestrurentData(filteredRes);
  };

  const handleFilter = () => {
    const filteredData = restrurentData.filter(
      (indiResData) => indiResData.info.avgRating > 4
    );
    setRestrurentData(filteredData);
  };

  return restrurentData.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter-res">
          <input
            type="text"
            name="searchBox"
            id="searchBox"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
              console.log(searchText);
            }}
          />
          <button className="searchBtn" onClick={handleSearch}>
            Search
          </button>
          <button className="filter-btn" onClick={handleFilter}>
            Top Rated Restaurants
          </button>
        </div>

        <div className="restruContainer">
          {restrurentData.map((resData, index) => (
            <RestrurentCard key={index} resData={resData} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Body;
