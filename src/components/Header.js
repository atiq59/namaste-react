import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import AppProvider from "./AppProvider";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { userName } = useContext(UserContext)
  return (
    <div>
      <div className="flex justify-between items-center border border-black border-solid">
          <img
            className="w-32"
            src={LOGO_URL}
          />
        <div className="nav-items">
          <ul className="flex p-4 m-4 gap-5 text-xl">
            <li>Online: {onlineStatus ? "🟢" : "🔴"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>Cart</li>
            <button style={{cursor: "pointer"}} onClick={() => {
              setBtnName((prev) => prev === 'Login' ? 'Logout' : 'Login')
            }}>{btnName}</button>
            <div className="text-lg font-bold">{userName}</div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;