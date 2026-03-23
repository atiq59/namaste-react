import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  const [filteredListOfRestro, setFilteredListOfRestro] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5682138&lng=77.2861119&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await res.json();
    console.log(json)
    setListOfRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredListOfRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return listOfRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => {
                const filter = listOfRestro.filter((val) => val?.info.name.toLowerCase().includes(search.toLowerCase()))
                setFilteredListOfRestro(filter)
            }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = filteredListOfRestro.filter(
              (res) => res?.info?.avgRating > 4,
            );
            setFilteredListOfRestro(filtered);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restro-container">
        {filteredListOfRestro.map((restro) => (
          <Link to={"/restaurant-menu/" + restro?.info?.id}><RestaurantCard
            key={restro?.info?.id}
            resData={restro?.info}
          />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
