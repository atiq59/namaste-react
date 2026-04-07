
const MenuList = ({ item }) => {
  console.log(item);
  
  return (
    <div className="p-2 m-2 border-b-2 text-left flex justify-between gap-2">
      <div className="w-9/12 mt-4">
        <div className="font-semibold text-lg">
          <span>{item.name}</span>
          <span> - ₹{item.price ? item.price / 100 : "N/A"}</span>
        </div>

        <p className="italic">{item.description}</p>
      </div>
      <div className="w-3/12">
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
