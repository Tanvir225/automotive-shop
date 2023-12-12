import { Link, NavLink } from "react-router-dom";
import logo from "../../public/logo.png"
import "./Navbar/Navbar.css"

const Navbar = () => {
    const links = <>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/add-product"} className='border p-3 rounded-lg border-[#ff4605]'>Add Listing</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
    </>
    return (
        <div className="bg-[#1a1f26] text-white  shadow-lg py-5 px-10 flex justify-between items-center">

            <Link to={"/"}>
                <div className="flex  items-center gap-3">
                    <img src={logo} className="w-20 rounded-full" alt="logo" />
                    <h2 className="font-extrabold  text-3xl">Drive<span className="text-[#ff4605]">-Ease</span></h2>
                </div>
            </Link>

            <ul className="flex items-center gap-6  text-lg">
                {
                    links
                }
            </ul>
        </div>
    );
};

export default Navbar;