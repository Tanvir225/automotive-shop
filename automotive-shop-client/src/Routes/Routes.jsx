import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ListingDetails from "../Pages/ListingDetails";
import AddProduct from "../Pages/AddProduct";
import PrivateRoute from "./PrivateRoute";
import Cart from "../Pages/Cart";
import Register from "../Pages/Register";
import CategoryList from "../Pages/CategoryList";


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path: "/add-product",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/cart",
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: "/listings/:id",
                element: <PrivateRoute><ListingDetails></ListingDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/listings/${params.id}`)
            },
            {
                path: "/listing/:category",
                element: <CategoryList></CategoryList>,
                
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
        ]
    }
])
export default myCreatedRoute;