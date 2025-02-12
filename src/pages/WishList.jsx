import React, { useContext, useEffect, useState } from "react";
import { AuthProviderContext } from "../Provider/AuthProvider";
import { AiFillDelete } from "react-icons/ai"; // Importing a delete icon from react-icons
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Skeleton from "react-loading-skeleton";
import { MdOutlineReadMore } from "react-icons/md";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthProviderContext); // Get the logged-in user from the AuthContext
  // console.log(loading);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllBlogs();
  }, [user]);

  const fetchAllBlogs = async () => {
    setIsLoading(true);
    // toast.error("errorMessage");
    try {
      const { data } = await axiosSecure.get(`/wishlist?email=${user.email}`)
      setWishlist(data);
     
    } catch (err) {
      if (err.response?.data?.message) {
        toast.error(err.response?.data?.message || "Failed to add a new Blog", {
          position: "top-center",
          autoClose: 2000,
        });
      }
      else {
        const errMessage = err.response?.data || "Failed to add a new Blog";
        toast.error(errMessage, {
          position: "top-center",
          autoClose: 2000,
        });
      }
    }finally {
      setIsLoading(false);
    }
    
  }
  const handleDelete = async (_id) => {

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });
  
    if (result.isConfirmed) {
      try {
        const { data } = await axiosSecure.delete(`/wishlist/${_id}`);
        toast.success('Data Deleted Successfully!!!');
        fetchAllBlogs(); 
      } catch (err) {
        if (err.response?.data?.message) {
          toast.error(err.response?.data?.message || "Failed to add a new Blog", {
            position: "top-center",
            autoClose: 2000,
          });
        }
        else {
          const errMessage = err.response?.data || "Failed to add a new Blog";
          toast.error(errMessage, {
            position: "top-center",
            autoClose: 2000,
          });
        }
      }
    }
  };
  


  return (
    <div className="dark:bg-gray-700 dark:text-white">
      <div className="container w-[90%] mx-auto py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">My wishlist</h2>
      {isLoading ? (<div className="flex items-center min-h-screen justify-center">
                          <Skeleton count={3} height={120} width={200} />
                      </div>) :
      wishlist.length === 0 ? (
        <div className="text-center">
          <h3 className="text-xl text-gray-500">Your wishlist is empty.</h3>
          <p>Add blogs to your wishlist from the Blog Details page.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-orange-950">
            <thead>
              <tr className="bg-gray-900 text-white ">
                <th className="border border-black py-2 text-sm md:text-base lg:text-lg">No.</th>
               
                <th className="border border-black py-2 text-sm md:text-base lg:text-lg ">Blog Title</th>
                <th className="border border-black px-1 py-2 text-sm md:text-base lg:text-lg">Category</th>
                <th className="border border-black py-2 text-sm md:text-base lg:text-lg">Writer</th>
                <th className="border border-black px-1 py-2 text-sm md:text-base lg:text-lg">Description</th>

                <th className="border border-black py-2 text-sm md:text-base lg:text-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((blog, index) => (
                <tr key={blog._id} className="text-center text-black bg-gray-50">
                  <td className="border border-black  py-2 text-sm md:text-base  ">{index + 1}</td>
                 
                  <td className="border border-black  py-2 text-sm md:text-base ">{blog.title}</td>
                  <td className="border border-black  py-2 text-sm md:text-base  ">{blog.category}</td>
                 
                  <td className="border border-black  py-2 text-sm md:text-base" >{blog.bloggerName}</td>
                  <td className="border border-black  py-2 text-sm md:text-base  ">{blog.shortDetails}</td>

                  <td className="border border-black py-2 text-sm md:text-base  ">
                    <div className="flex justify-center items-center gap-2 md:gap-4">
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className=" text-center text-red-600 rounded-full transition-all duration-300"
                    >
                      <AiFillDelete className="text-center" size={24} />
                    </button>
                  
                   <button
                      onClick={() => navigate(`/blog/${blog.blog_id}`)}
                      className=" text-center text-sky-500 hover:text-black  transition-all duration-300"
                    >
                      <MdOutlineReadMore className="text-2xl font-bold " /> 
                    </button>
                   
                    </div>
                   
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    
    </div>
    </div>
    
  );
};

export default WishList;
