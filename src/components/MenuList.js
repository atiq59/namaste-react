import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice.js";

const MenuList = ({ item, isFromCart = false }) => {
  console.log("menu list", item);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="p-2 m-2 border-b-2 text-left flex justify-between gap-2">
      <div className="w-9/12 mt-4">
        <div className="font-semibold text-lg">
          <span>{item.name}</span>
          <span> - ₹{item.price ? item.price / 100 : "N/A"}</span>
        </div>

        <p className="italic">{item.description}</p>
      </div>
      <div className="w-3/12 relative">
        {!isFromCart && (
          <button
            className="absolute bg-white p-2 px-4 border-green-500 border top-[-10px] left-[155px] font-bold text-green-500 rounded-lg hover:bg-green-500 hover:text-white"
            onClick={() => handleAddItem(item)}
          >
            Add
          </button>
        )}

        {isFromCart && (
          <button
            className="absolute bg-red-500 text-white p-2 px-4 border border-red-500 top-[-12px] left-[200px] font-bold rounded-lg shadow-md hover:bg-red-400 hover:shadow-lg transition-all duration-200"
            onClick={() => dispatch(removeItem(item))}
          >
            -
          </button>
        )}

        {item.imageId && (
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              item.imageId
            }
            alt="menu-image"
            className="w-full"
          />
        )}
      </div>
    </div>
  );
};

export default MenuList;
