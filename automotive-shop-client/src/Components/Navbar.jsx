import { Link, NavLink } from "react-router-dom";
import logo from "../../public/logo.png"
import "./Navbar/Navbar.css"
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {

    //get user from context
    const {user,logOut} = useContext(AuthContext)

    //handleLogout
    const handleLogout = ()=>{
        logOut()
        toast.success("logout successful")
    }

    const links = <>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/add-product"} className='border p-3 rounded-lg border-[#ff4605]'>Add Listing</NavLink>
        <NavLink to={"/cart"} >Cart</NavLink>
        {
            user ? 
            <div className="flex items-center gap-5">
                <img src={user.photoURL} alt={`${user.displayName}`} className="w-16 rounded-full" />
                <button onClick={handleLogout} className="btn btn-outline bg-[#ff4605] text-white">Logout</button>
            </div> : 
            <NavLink to={"/login"}>Login</NavLink>
        }
    </>
    return (
        <div className="bg-[#1a1f26] hidden  text-white  shadow-lg py-5 px-10 md:flex justify-between items-center">

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