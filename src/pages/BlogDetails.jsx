
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthProviderContext } from '../Provider/AuthProvider';
// import Swal from 'sweetalert2';
import axios from 'axios';
import Comment from '../components/Comment';
import AllComments from '../components/AllComments';
import { toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';
// import { toast } from 'react-toastify';
// import { h2 } from 'framer-motion/client';

const BlogDetails = () => {
    const { id } = useParams();
    // console.log(id);
    const navigate = useNavigate();
    const { user, loading } = useContext(AuthProviderContext)
    const [blog, setBlog] = useState({})
    const [email, setUserEmail] = useState(user?.email || '');
    const [commentsUpdated, setCommentsUpdated] = useState(false);

    useEffect(() => {
        if (user) {
            setUserEmail(user.email);
        }
        fetchBlogData();
    }, [id, user])

    const fetchBlogData = async () => {
        try {
            const { data } = await axios.get(`https://assignment-11-server-one-kohl.vercel.app/blog/${id}`)
            setBlog(data)
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


    const handleCommentAdded = () => {
        setCommentsUpdated((prev) => !prev);
    };

    const { _id, title, category, longDetails, shortDetails, coverImage, bloggerEmail, bloggerName, userLogo, } = blog || {};

    if(loading){
        return <div className="flex items-center min-h-screen justify-center">
            <Skeleton count={3} height={120} width={200} />
            {/* <span className="loading loading-infinity loading-lg flex items-center justify-center"></span> */}
        </div>
    }


    return (
        <div className='dark:bg-gray-700 dark:text-white'>
            <div className='container w-[90%] mx-auto'>
            <div className="  py-10">
                {/* Page Title */}
                <div className="text-center  mb-12">
                    <h1 className="text-2xl md:text-4xl font-bold">Blog Details</h1>
                    <p className="text-xs sm:text-base md:text-lg">Detailed information about the blog </p>
                </div>

                {/* Blog Card */}
                <div className='w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden'>
                    <div className=" flex flex-col md:flex-row justify-between ">

                        <div className="h-[220px] sm:h-[300px] md:min-h-[440px] w-full md:w-[48%] mx-auto md:mx-0 border rounded-lg p-3">
                            <img src={coverImage} className="h-full w-full object-cover border overflow-hidden rounded-lg " alt="coverImage" />

                        </div>


                        {/* Blog Information.................................. */}
                        <div className="p-2 w-full md:w-[51%] mx-auto">

                            <div className="mb-2">
                                <h2 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-800">{title}</h2>
                            </div>

                            <div className=" mb-2">
                                <p className="text-gray-900 text-sm md:text-base font-semibold">Category:
                                    <span className="font-bold uppercase text-sky-500"> {category}</span>
                                </p>
                            </div>


                            <div className='text-left mb-4'>
                                <p className="text-gray-900 text-sm font-semibold">Writer:
                                    <span className="font-medium text-pink-500"> {bloggerName}</span>
                                </p>

                            </div>

                            {/* <hr /> */}

                            {/* Blog Details */}
                            <h2 className='mb-2'>
                                <span className="border-b-4 md:border-b-2 border-sky-400 text-sm md:text-base font-semibold text-black ">Short Details
                                </span>
                            </h2>
                            <p className="font-normal text-sm mb-5 md:overflow-y-scroll  md:h-[60px] p-2 bg-slate-50 border rounded-sm text-black w-[98%]"> {shortDetails}</p>

                            <div className=''>
                                <h2 className='mb-2'>
                                    <span className="border-b-4 md:border-b-2 border-sky-400 text-sm md:text-base font-semibold text-black ">Long Details
                                    </span>
                                </h2>
                                <p className="md:overflow-y-scroll md:h-[170px] font-normal text-sm p-2 bg-slate-50 border rounded-t-sm rounded-b-lg text-black w-[98%]"> {longDetails}</p>
                            </div>


                            {/* <div className="text-gray-700 font-semibold mb-6">
                                <span className="text-xs md:text-base font-normal">Long Details:{longDetails}</span>

                            </div> */}


                        </div>


                    </div>

                    {/* btn... */}
                    <div>

                        {
                            (user?.email === bloggerEmail) &&
                            <div className='flex items-center justify-center my-6'>
                                <button
                                    onClick={() => navigate(`/update/${id}`)}
                                    className="bg-gradient-to-r from-sky-500 to-blue-500 text-white  text-xs sm:text-sm md:text-base font-bold py-2 px-6 rounded-lg shadow-md "
                                >
                                    Update Blog
                                </button>
                            </div>
                        }
                    </div>

                </div>

                <div className='w-full mx-auto bg-slate-50 mt-5 rounded-xl'>

                    <label className="label">
                        <span className="label-text font-bold text-xl ml-4">Leave a Comment</span>
                    </label>
                    {
                        (user?.email === bloggerEmail) ?
                            <h2 className='text-red-500 ml-4 text-sm sm:text-base'>Can not comment on own blog*</h2>
                            :
                            <Comment key={id} id={id} onCommentAdded={handleCommentAdded}></Comment>
                    }

                    <div className='my-2'>
                        <h2 className='text-2xl ml-4 mt-8 border-b-2 w-[80%] font-bold text-black'>All Comments </h2>
                        {/* <hr /> */}

                        <AllComments key={id} id={id} commentsUpdated={commentsUpdated}></AllComments>

                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
};



export default BlogDetails;