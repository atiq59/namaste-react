import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestrauntMenu(1);

    console.log("resInfo", resInfo)

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
