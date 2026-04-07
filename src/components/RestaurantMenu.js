import { useState } from "react";
import restrauntMenu from "../utils/mockData";
import MenuCard from "./MenuCard";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  return (
    <>
      <div className="text-center my-4 font-bold text-2xl">
        Amma's Haus - by Asian Haus
      </div>
      {restrauntMenu.cards.map((menu, i) => (
        <MenuCard
          key={i}
          menu={menu.card.card}
          showIndex={i === showIndex ? true : false}
          setShowIndex={() => setShowIndex((prev) => prev === i ? null : i)}
        />
      ))}
    </>
  );
};

export default RestaurantMenu;
