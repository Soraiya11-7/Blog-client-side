
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthProviderContext } from '../Provider/AuthProvider';
// import Swal from 'sweetalert2';
import axios from 'axios';
import Comment from '../components/Comment';
import AllComments from '../components/AllComments';
import { toast } from 'react-toastify';
// import { h2 } from 'framer-motion/client';

const BlogDetails = () => {
    const { id } = useParams();
    // console.log(id);
    const navigate = useNavigate();
    const { user } = useContext(AuthProviderContext)
    const [blog, setBlog] = useState({})
    const [email, setUserEmail] = useState(user?.email || '');
    const [commentsUpdated, setCommentsUpdated] = useState(false);

    useEffect(() => {
        if (user) {
            setUserEmail(user.email);
        }
        fetchBlogData();
    }, [id,user])

    const fetchBlogData = async () => {
     try {
        const { data } = await axios.get(`http://localhost:5000/blog/${id}`)
        setBlog(data)
        } catch (err) {
          // console.error(err);
          // console.log(err);
        //   const errorMessage = err.response?.data?.message || err.message || 'Something went wrong!';
        //   toast.error(errorMessage);
        }
    }


    const handleCommentAdded = () => {
        setCommentsUpdated((prev) => !prev);
    };

    const { _id, title, category, longDetails, shortDetails, coverImage, bloggerEmail, bloggerName, userLogo, } = blog || {};

    return (
        <div className='w-[80%] mx-auto'>
            <div className=" bg-gradient-to-tr from-purple-500 via-indigo-300 to-lime-900 py-10">
                {/* Page Title */}
                <div className="text-center text-white mb-12">
                    <h1 className="text-2xl md:text-4xl font-bold">Blog Details</h1>
                    <p className="text-xs sm:text-base md:text-lg">Detailed information about the blog </p>
                </div>

                {/* Review Card */}
                <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden ">

                    <div className="h-[250px] sm:h-[300px] md:h-[400px] w-full mx-auto border  rounded-lg mb-4 p-4">
                        <img src={coverImage} className="h-full w-full object-cover border overflow-hidden rounded-lg " alt="coverImage" />

                    </div>


                    {/* Review Information.................................. */}
                    <div className="p-3">
                        {/* blog Title & Rating */}
                        <div className="md:flex justify-between mb-2">
                            <h2 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-800  mb-2 md:mb-0">{title}</h2>

                        </div>

                        {/* Publishing Year & Genre */}
                        <div className="md:flex justify-between mb-4">

                            <p className="text-gray-600 text-sm md:text-lg font-semibold">Category:
                                <span className="font-medium uppercase"> {category}</span>
                            </p>
                        </div>

                        <hr />

                        {/* Reviewer Info */}
                        <div className="flex items-center gap-2 mb-3 mt-2">
                            <div className='w-8 md:w-12 h-8 md:h-12 rounded-full border'>
                                <img
                                    src={userLogo}
                                    alt="User Avatar"
                                    className="w-full h-full rounded-full border object-cover overflow-hidden "
                                />
                            </div>
                            <div className='text-left'>
                                <p className="font-semibold text-sm md:text-lg">{bloggerName}</p>
                                <p className="text-gray-600 text-xs md:text-base">{bloggerEmail}</p>
                            </div>
                        </div>

                        {/* Blog Details */}
                        <div className="text-gray-700 font-semibold mb-6">
                            <span className="text-xs md:text-base font-normal">Short Details:{shortDetails}</span>

                        </div>
                        <div className="text-gray-700 font-semibold mb-6">
                            <span className="text-xs md:text-base font-normal">Long Details:{longDetails}</span>

                        </div>
                         {
                            (user?.email === bloggerEmail) &&  
                            <div className='flex items-center justify-end mb-6'>
                                <button
                            onClick={() =>navigate(`/update/${id}`)}
                            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white  text-xs sm:text-sm md:text-base font-bold py-2 px-6 rounded-lg shadow-md "
                        >
                            Update Blog
                        </button>
                            </div>
                         }
                         
                        
                        <label className="label">
                        <span className="label-text">Leave a Comment</span>
                    </label>
                          {
                            (user?.email === bloggerEmail) ? 
                            <h2 className='text-red-500'>Can not comment on own blog*</h2>
                            : 
                            <Comment key={id} id={id} onCommentAdded={handleCommentAdded}></Comment> 
                          }

                          <div className='my-2'>
                          <h2 className='text-3xl text-center my-6'>Comment </h2>
                          <hr />

                          <AllComments key={id} id={id} commentsUpdated={commentsUpdated}></AllComments>

                          </div>

                    </div>
                </div>
            </div>
        </div>
    );
};



export default BlogDetails;