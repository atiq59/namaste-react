import { useSelector, useDispatch } from "react-redux";
import MenuList from "./MenuList.js";
import { clearItem } from "../utils/cartSlice.js";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items || []);
  const dispatch = useDispatch();
  console.log(cartItem);

  return (
    <div className="text-center m-2 p-2">
        <div className="text-2xl font-bold">Cart</div>
      <div className="flex justify-end items-center w-6/12 m-auto mb-4">
        {cartItem.length > 0 && (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            onClick={() => dispatch(clearItem())}
          >
            Clear Cart
          </button>
        )}
      </div>
      {cartItem.length === 0 && <p className="text-gray-500 italic">Cart is empty. Add item to your cart</p>}
      <div className="w-6/12 m-auto">
        {cartItem.map((cart) => (
          <MenuList key={cart.id || cart} item={cart} isFromCart={true} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
