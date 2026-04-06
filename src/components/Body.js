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
    <div className="p-4">
      <div className="flex gap-2 mb-2">
        <div className="px-3">
            <input type="text" className="border border-solid border-black" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => searchRestaurants(search.toLowerCase())} className="bg-green-900 text-white px-4 py-2 ml-4 rounded-lg">Search</button>
        </div>
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded-lg"
          onClick={filterTopRated}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap gap-2 p-3 items-center">
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
