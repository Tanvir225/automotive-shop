import {
  AiOutlineHome,
  AiOutlineCar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const BottomNavigation = () => {
  return (
    <div className="md:hidden text-xl ">
      <div className="btm-nav h-24 z-20">
        <NavLink to={"/"}>
          <AiOutlineHome></AiOutlineHome>
          <span className="btm-nav-label">Home</span>
        </NavLink>

        <NavLink to={"/listings"}>
          <AiOutlineCar></AiOutlineCar>
          <span className="btm-nav-label">Listings</span>
        </NavLink>

        <NavLink to={"/cart"}>
          <AiOutlineShoppingCart></AiOutlineShoppingCart>
          <span className="btm-nav-label">Cart</span>
        </NavLink>
      </div>
    </div>
  );
};

export default BottomNavigation;
