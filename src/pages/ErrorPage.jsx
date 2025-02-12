import { Link, useRouteError } from "react-router-dom";
import lotti from "../assets/notFound.json"
import Lottie from "lottie-react";
const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error);
    

    return (
        <div className=" dark:text-white text-center flex flex-col justify-center items-center h-screen container w-[90%] mx-auto">
         
            <Lottie animationData={lotti} loop={true} className=" " />
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 -mt-12 sm:-mt-16 z-10">
                <i>{error.statusText || error.message}</i>
            </p>
            <h5 className="mb-3 text-xl sm:text-2xl md:text-3xl z-10">Go back where you from</h5>
             <Link to="/"><button className="dark:text-white hover:text-white px-4 md:px-6 py-2 rounded-full text-base md:text-xl border-2 border-black hover:bg-sky-600 transition duration-300 dark:border-white text-black font-semibold z-10 ">Home</button></Link>
          
        </div>
    );
};

export default ErrorPage;