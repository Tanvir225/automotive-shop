import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";
import BottomNavigation from "../Components/BottomNavigation";
import MobileNav from "../Components/MobileNav";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <MobileNav></MobileNav>
            <BottomNavigation></BottomNavigation>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;