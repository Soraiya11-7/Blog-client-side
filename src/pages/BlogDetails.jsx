
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthProviderContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const BlogDetails = () => {
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();
    const { user } = useContext(AuthProviderContext)
    const [blog, setBlog] = useState({})
    useEffect(() => {
        fetchBlogData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const fetchBlogData = async () => {
        const { data } = await axios.get(
            `http://localhost:5000/blog/${id}`
        )
        setBlog(data)
        // setStartDate(new Date(data.deadline))
    }
    const { _id, title, category, longDetails, shortDetails, coverImage, bloggerEmail, bloggerName, userLogo, } = blog || {}


    //current logged in users info
    const [email, setUserEmail] = useState(user?.email || '');
    const [name, setUserName] = useState(user?.displayName || '');



    useEffect(() => {
        if (user) {
            setUserEmail(user.email);
            setUserName(user.displayName);
        }

    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const comment = form.comment.value;
        

        const newComment = {comment, commentOwnerName: user.name, blog_id: _id, };

        fetch("http://localhost:5000/commentList", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                Swal.fire({
                        title: 'Success!',
                        text: 'comment added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    };

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

                        <form onSubmit={handleSubmit} className='bg-slate-300 py-10 px-6 shadow-lg rounded-xl' >

                            <div className="form-control w-full mb-8">
                                <label className="label">
                                    <span className="label-text">Leave a Comment</span>
                                </label>
                                <textarea name="comment" placeholder="write a comment here" className="input input-bordered w-full text-xs sm:text-base" required />
                            </div>


                            <input type="submit" value=" Add Comment" className="btn btn-block bg-purple-500 text-white font-bold border-none" />
                        </form>

                        {/* Add to Comment List Button */}
                        {/* <div className="flex justify-center ">
                                <button
                                    onClick={() =>handleAddToCommentList()}
                                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white  text-xs sm:text-sm md:text-base font-bold py-2 px-6 rounded-lg shadow-md hover:from-blue-500 hover:to-green-400 transition-all duration-300"
                                >
                                    Add Comment
                                </button>
                            </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};



export default BlogDetails;