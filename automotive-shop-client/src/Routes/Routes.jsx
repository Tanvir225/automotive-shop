import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import AddProduct from "./AddProduct";


const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
               
            },
            {
                path:"/add-product",
                element:<AddProduct></AddProduct>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
        ]
    }
])
export default myCreatedRoute;