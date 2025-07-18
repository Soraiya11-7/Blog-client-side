
import React, { useContext, useEffect, useState } from "react";
// import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProviderContext } from "../Provider/AuthProvider";
// import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
// import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Card2 = ({ blog }) => {
    const { _id, title, category, shortDetails, coverImage, bloggerName, userLogo } = blog || {};
    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthProviderContext);
    const [email, setUserEmail] = useState(user?.email || '');
    useEffect(() => {
        if (user) {
            setUserEmail(user.email);
        }

    }, [user]);

    const handleAddToWishList = async () => {
        if (!user) {
            // navigate('/auth/login', { state: `/blogs` });
            navigate('/auth/login', { state: location.pathname });
        }
        else {
            const newWishList = { blog_id: _id, userEmail: email };

            try {
                const response = await axiosSecure.post("/wishlist", newWishList);

                if (response.data.insertedId) {
                    toast.success("Blog added on Wishlist Successfully", {
                        position: "top-center",
                        autoClose: 2000,
                    });
                }
                navigate('/wishlist');
            } catch (err) {
                if(err.response?.data?.message){
                    toast.error(err.response?.data?.message || "Failed to add to wishlist", {
                        position: "top-center",
                        autoClose: 2000,
                    });
                }
                else{
                    const errMessage = err.response?.data || "Failed to add to wishlist";
                    toast.error(errMessage, {
                        position: "top-center",
                        autoClose: 2000,
                    });
                }
                

            }
        }

    };

    return (
        <div className="w-full mx-auto flex justify-center items-center " data-aos="flip-left"
        data-aos-easing="ease-out-cubic"  data-aos-once="true">
             <div className="shadow-xl w-full h-full rounded-lg bg-white overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Header.................... */}

                <div className="h-52 w-full mx-auto shadow-xl rounded-t-lg ">
                    <img src={coverImage} className="h-full w-full object-cover overflow-hidden rounded-t-lg" alt="coverImage" />
                </div>

                <div className=" bg-white dark:bg-gray-900  pb-3 text-left w-full">
                    {/* Card Content...................... */}
                    <div className="relative bg-white dark:bg-gray-800  p-2 w-[92%] text-left mx-auto shadow-xl rounded-b-lg h-auto sm:min-h-[200px] flex flex-col sm:flex-grow   ">
                        <p className="text-sm text-sky-600 dark:text-sky-500 font-bold uppercase mb-2  ">{category}</p>
                        <h3 className="text-base text-black dark:text-white md:text-lg font-semibold h-auto sm:min-h-[55px] sm:flex-grow ">{title}</h3>


                        <div className="mt-2 flex flex-col sm:flex-grow min-h-[120px] sm:min-h-[200px] xl:min-h-[180px] ">
                            <p className="text-gray-600 dark:text-gray-300  text-sm h-auto sm:min-h-[50px] sm:flex-grow mb-2 xl:min-h-[40px]  ">
                                <span>{shortDetails}</span>
                            </p>
                            <p className="text-xs sm:text-sm font-semibold text-gray-800 mb-2 ">By {bloggerName}</p>


                            <div className=" px-4 text-center border-t-2 border-gray-300  my-4 sm:my-4 ">


                                <Link to={`/blog/${_id}`}>
                                    <button className=" bg-sky-500 mt-4 p-2 text-white text-sm font-medium rounded-lg">Details</button>
                                </Link>

                                <button onClick={handleAddToWishList} className=" ml-2 bg-sky-500 mt-4 p-2 text-white text-sm font-medium rounded-lg">Add Wishlist</button>

                            </div>
                        </div>
                    </div>


                </div>


            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default Card2;