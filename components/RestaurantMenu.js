import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const {resId} = useParams();
  const fetchMenu = async () => {
    try {
      const baseUrl = "https://www.swiggy.com/dapi/menu/pl";

      const params = new URLSearchParams({
        "page-type": "REGULAR_MENU",
        "complete-menu": "true",
        lat: "28.5682138",
        lng: "77.2861119",
        restaurantId: "353992",
        catalog_qa: "undefined",
        submitAction: "ENTER",
      });

      const res = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + resId);

      console.log("status:", res.status);

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Cold Drink</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
