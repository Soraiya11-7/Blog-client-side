
import React, { useContext, useEffect, useState } from "react";
// import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProviderContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
// import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Card = ({ blog}) => {
    const {_id, title, category,  shortDetails, coverImage, bloggerName, userLogo } = blog || {};
    const location = useLocation();
    // console.log(location);
   const navigate = useNavigate();
   const axiosSecure = useAxiosSecure();
     const {user}= useContext(AuthProviderContext);
     const [email, setUserEmail] = useState(user?.email || '');
      useEffect(() => {
            if (user) {
                setUserEmail(user.email);
            }
           
        }, [user]);
       
        const handleAddToWishList = async () => {
            if(!user) {
                // navigate('/auth/login', { state: `/blogs` });
                navigate('/auth/login', { state: location.pathname });
            }
            else{
                const newWishList = { blog_id: _id, userEmail: email };

                    try {
                        const response = await axiosSecure.post("/wishlist", newWishList);
                    
                        if (response.data.insertedId) {
                          toast.success("Blog added on Wishlist Successfully", {
                            position: "top-center",
                            autoClose: 2000,
                          });
                        }
                      } catch (err) {
                        console.log(err);
                        const errorMessage = err.message ||  err.response?.data?.message || "Failed to add to wishlist";
                        toast.error(errorMessage, {
                          position: "top-center",
                          autoClose: 2000,
                        });
                      
                      }
                    }

        };
    
    return (
        <div className="w-full mx-auto flex justify-center items-center ">
            <div className="shadow-xl w-full h-full rounded-lg bg-white overflow-hidden ">
                {/* Header.................... */}
               
                    <div  className="h-52 w-full mx-auto shadow-xl rounded-t-lg ">
                        <img src={coverImage} className="h-full w-full object-cover overflow-hidden rounded-t-lg" alt="coverImage" />
                </div>

                <div className=" bg-white pb-4 text-left w-full">
                    {/* Card Content...................... */}
                    <div className="relative bg-white p-4 w-[90%] text-left mx-auto shadow-xl rounded-b-lg min-h-[300px] flex flex-col flex-grow   ">
                    <p className="text-sm text-gray-500 uppercase ">{category}</p>
                    <h3 className="text-base md:text-lg font-semibold  min-h-[30px] flex-grow ">{title}</h3>

            
                        <div className="mt-8 flex flex-col flex-grow min-h-[280px]  ">
                        <p className="text-gray-600  text-sm min-h-[50px] flex-grow ">
                                <span>{shortDetails}</span>
                            </p>
                            <p className="text-sm font-semibold text-gray-800 mb-3 ">BY {bloggerName} - </p>
                            

                            <div className=" px-4 text-center border-t border-gray-300  mt-4 min-h-[70px] flex-grow ">
                              
                               
                                <Link to={`/blog/${_id}`}>
                                <button className=" bg-purple-500 mt-4 p-2 text-white text-sm font-medium rounded-lg">Explore Details</button>
                           </Link>
                           
                                <button onClick={handleAddToWishList} className=" ml-2 bg-purple-500 mt-4 p-2 text-white text-sm font-medium rounded-lg">Add Wishlist</button>
                           
                            </div>
                        </div>
                    </div>

                   
                </div>


            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default Card;