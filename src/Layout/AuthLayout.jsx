import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className=" bg-gray-50  w-[80%] mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;