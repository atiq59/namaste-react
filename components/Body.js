import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestraunt from "../utils/useRestraunt";

const Body = () => {
  const [search, setSearch] = useState("");
  const {restraunts, filteredRestraunts, searchRestaurants, filterTopRated} = useRestraunt();

  return restraunts?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => searchRestaurants(search.toLowerCase())}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={filterTopRated}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restro-container">
        {filteredRestraunts.map((restro) => (
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
