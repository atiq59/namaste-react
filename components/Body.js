import { useEffect, useState } from "react";
import resData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  const [filteredListOfRestro, setFilteredListOfRestro] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5682138&lng=77.2861119&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
    );
    const json = await res.json();
    const data = json.data?.cards.filter((val) => val.card.card.info);

    setListOfRestro(data);
    setFilteredListOfRestro(data);
  };

  return listOfRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => {
                const filter = listOfRestro.filter((val) => val.card?.card?.info.name.toLowerCase().includes(search.toLowerCase()))
                setFilteredListOfRestro(filter)
            }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = filteredListOfRestro.filter(
              (res) => res.card?.card?.info?.avgRating > 4,
            );
            setFilteredListOfRestro(filtered);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restro-container">
        {filteredListOfRestro.map((restro) => (
          <RestaurantCard
            key={restro?.card?.card?.info?.id}
            resData={restro.card?.card?.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
