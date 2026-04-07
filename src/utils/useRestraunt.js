import { useEffect, useState } from "react";

const useRestraunt = () => {
  const [restraunts, setRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5682138&lng=77.2861119&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await res.json();
    const restaurants =
      json?.data?.cards?.reduce((acc, card) => {
        const res = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        return res ? res : acc;
      }, []) || [];
    setRestraunts(restaurants);
    setFilteredRestraunts(restaurants);
  };

  const searchRestaurants = (searchText) => {
    const filtered = restraunts.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredRestraunts(filtered);
  };

  const filterTopRated = () => {
    const filtered = restraunts.filter((res) => res?.info?.avgRating > 4);
    setFilteredRestraunts(filtered);
  };

  return { restraunts, filteredRestraunts, searchRestaurants, filterTopRated };
};

export default useRestraunt;
