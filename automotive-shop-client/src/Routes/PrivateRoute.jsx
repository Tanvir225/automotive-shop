import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    //get user and loading form context
    const { user, loading } = useContext(AuthContext)

    //location
    const location = useLocation()

    if (loading) {
        return <div className="flex justify-center items-center h-[100vh]">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to={"/login"}></Navigate>

};

export default PrivateRoute;