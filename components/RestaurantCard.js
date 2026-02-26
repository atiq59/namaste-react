import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const {resData} = props;
    const { name, areaName, costForTwo, cuisines, avgRating, cloudinaryImageId, sla } = resData;
  return (
    <div className="restro-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-image"
        className="res-image"
      />
      <h3>{name}</h3>
      <h3>{areaName}</h3>
      <h3>{costForTwo}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h3>{sla.deliveryTime}</h3>
    </div>
  );
};

export default RestaurantCard;