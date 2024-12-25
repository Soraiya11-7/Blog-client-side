import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const MainLayout = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-368px)]">
            <Outlet />
          </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;