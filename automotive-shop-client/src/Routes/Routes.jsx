import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import AddProduct from "./AddProduct";
import ListingDetails from "../Pages/ListingDetails";


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
                path:"/listing/:id",
                element:<ListingDetails></ListingDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/listings/${params.id}`)
            },
            {
                path:"/login",
                element:<Login></Login>
            },
        ]
    }
])
export default myCreatedRoute;