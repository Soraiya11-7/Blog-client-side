import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className=" dark:bg-gray-700 container w-full mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;