import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className=" bg-gray-50 container w-[90%]  mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;