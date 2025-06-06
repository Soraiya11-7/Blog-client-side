
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

    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        if (user) {
            setUserEmail(user.email);
        }
        fetchBlogData();
    }, [id, user])

    const fetchBlogData = async () => {
        setIsLoading(true);
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
        finally {
            setIsLoading(false);
        }
    }


    const handleCommentAdded = () => {
        setCommentsUpdated((prev) => !prev);
    };

    const { _id, title, category, longDetails, shortDetails, coverImage, bloggerEmail, bloggerName, userLogo, } = blog || {};

    if (loading) {
        return <div className="flex items-center min-h-screen justify-center">
            <Skeleton count={3} height={120} width={200} />
            {/* <span className="loading loading-infinity loading-lg flex items-center justify-center"></span> */}
        </div>
    }


    return (
        <div className='dark:bg-gray-950 dark:text-white'>
            <div className='container w-[90%] mx-auto'>
                <div className="  py-10">
                    {/* Page Title */}
                    <div className="text-center  mb-14">
                        <h1 className="text-2xl md:text-4xl font-bold">Blog Details</h1>
                        <p className="text-sm sm:text-base md:text-lg">Detailed information about the blog </p>
                    </div>

                    {/* Blog Card */}
                    {
                        isLoading ? (<div className="flex items-center h-screen justify-center">
                            <Skeleton count={3} height={120} width={200} />
                        </div>) :
                            <div>
                                <div className='w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden'>
                                    <div className=" flex flex-col-reverse md:flex-row justify-between ">



                                        {/* Blog Information.................................. */}
                                        <div className="p-2 w-full md:w-[51%] mx-auto">

                                            <div className="mb-2">
                                                <h2 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-800">{title}</h2>
                                            </div>
                                            <p className="font-normal text-sm md:text-base mb-4 text-black w-[98%]"> {shortDetails}</p>


                                            <div className=" mb-1">
                                                <p className="text-gray-900 text-sm md:text-base font-semibold">Category:
                                                    <span className="font-bold uppercase text-sky-500"> {category}</span>
                                                </p>
                                            </div>


                                            <div className='text-left mb-4'>
                                                <p className="text-gray-900 text-sm font-semibold">Owner:
                                                    <span className="font-medium text-sky-600"> {bloggerName}</span>
                                                </p>

                                            </div>



                                            {/* Blog Details */}



                                            <p className=" font-normal text-sm md:text-base text-black w-[90%]"> {longDetails}</p>



                                            {/* <div className="text-gray-700 font-semibold mb-6">
                                <span className="text-xs md:text-base font-normal">Long Details:{longDetails}</span>

                            </div> */}


                                        </div>

                                        <div className="h-[220px] sm:h-[300px] md:min-h-[400px] w-full md:w-[48%] mx-auto md:mx-0 border rounded-lg p-3">
                                            <img src={coverImage} className="h-full w-full object-cover border overflow-hidden rounded-lg " alt="coverImage" />

                                        </div>



                                    </div>

                                    {/* btn... */}
                                    <div>

                                        {
                                            (user?.email === bloggerEmail) &&
                                            <div className='flex items-center justify-center my-6'>
                                                <button
                                                    onClick={() => navigate(`/update/${id}`)}
                                                    className="bg-sky-500 hover:bg-sky-600 text-white  text-xs sm:text-sm md:text-base font-bold py-2 px-6 rounded-lg shadow-md "
                                                >
                                                    Update Blog
                                                </button>
                                            </div>
                                        }
                                    </div>

                                </div>

                                <div className='w-full mx-auto bg-white mt-5 rounded-lg'>

                                    <label className="label">
                                        <span className="label-text font-bold text-xl md:text-2xl ml-4">Leave a Comment</span>
                                    </label>
                                    {
                                        (user?.email === bloggerEmail) ?
                                            <h2 className='text-red-500 ml-4 text-sm sm:text-base'>Can not comment on own blog*</h2>
                                            :
                                            <Comment key={id} id={id} onCommentAdded={handleCommentAdded}></Comment>
                                    }

                                    <div className='my-2'>
                                        <h2 className='text-xl md:text-2xl ml-4 mt-8 border-b-2 w-[80%] font-bold text-black'>All Comments </h2>
                                        {/* <hr /> */}

                                        <AllComments key={id} id={id} commentsUpdated={commentsUpdated}></AllComments>

                                    </div>
                                </div>
                            </div>
                    }


                </div>
            </div>
        </div>

    );
};



export default BlogDetails;