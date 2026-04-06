import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const {resData} = props;
    const { name, areaName, costForTwo, cuisines, avgRating, cloudinaryImageId, sla } = resData;
  return (
    <div className="w-[400px] bg-gray-100 hover:bg-gray-300 cursor-pointer p-2 rounded-lg">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-image"
        className="w-[100%] h-[220px] object-cover rounded-lg mb-2"
      />
      <h3 className="font-bold text-xl py-3">{name}</h3>
      <h3 className="text-lg">{areaName}</h3>
      <h3 className="text-lg">{costForTwo}</h3>
      <h3 className="text-lg">{cuisines.join(", ")}</h3>
      <h3 className="text-lg">{avgRating}</h3>
      <h3 className="text-lg">{sla.slaString}</h3>
    </div>
  );
};

export default RestaurantCard;