import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProviderContext } from "../Provider/AuthProvider";


const SecretRoutes = ({children}) => {

    const {user,loading} = useContext(AuthProviderContext);
    const location = useLocation();

    if(loading){
        return <div className="flex items-center min-h-screen justify-center">
            <span className="loading loading-infinity loading-lg flex items-center justify-center"></span>
        </div>
    }

    if(user){
        return children;
    }

    return (
        <Navigate state={location.pathname} to='/auth/login'></Navigate>
    );
};

export default SecretRoutes;
