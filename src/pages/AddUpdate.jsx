import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthProviderContext } from '../Provider/AuthProvider';
// import Swal from 'sweetalert2';
// import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import { format } from 'date-fns';
// import axios from 'axios';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { toast, ToastContainer } from 'react-toastify';
// import axios from 'axios';
import Swal from 'sweetalert2';
import Skeleton from 'react-loading-skeleton';

const AddUpdate = () => {
    const { user } = useContext(AuthProviderContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [genre, setGenre] = useState('');

    // const date = format(new Date(), 'PP');
    const [isLoading, setIsLoading] = useState(true);


    const [blog, setBlog] = useState({})
    const axiosSecure = useAxiosSecure();
    const [email, setUserEmail] = useState(user?.email || '');

    useEffect(() => {
        if (user) {
            setUserEmail(user.email);
        }
        fetchBlogData();
    }, [id, user]);


    const fetchBlogData = async () => {
        setIsLoading(true);

        try {
            const { data } = await axiosSecure.get(`/blog/${id}`)
            setBlog(data);
            setGenre(data.category || '');

        } catch (error) {
            // toast.error('Failed to fetch blog data.');
        }
        finally {
            setIsLoading(false);
        }
    };

    const {
        _id,
        title, category, longDetails, shortDetails, coverImage, bloggerEmail, bloggerName, userLogo
    } = blog || {};

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const shortDetails = form.shortDetails.value;
        const longDetails = form.longDetails.value;
        const coverImage = form.coverImage.value;

        const newBlog = { title, category: genre, longDetails, shortDetails, coverImage, bloggerEmail, bloggerName, userLogo };

        // console.log(newBlog);

        try {
            const response = await axiosSecure.put(`/blog/${_id}`, newBlog)
            // console.log(response);
            if (response.data?.modifiedCount) {
                Swal.fire({
                    title: "Success!",
                    text: "Blog Updated Successfully!!!",
                    icon: "success",
                    confirmButtonText: "Cool",
                });
            }
            // toast.success('Data Updated Successfully!!!');
            form.reset()
            navigate(`/blog/${id}`);

        } catch (err) {
            if (err.response?.data?.message) {
                toast.error(err.response?.data?.message || "Failed to modified the Blog", {
                    position: "top-center",
                    autoClose: 2000,
                });
            }
            else {
                const errMessage = err.response?.data || "Failed to modified the Blog";
                toast.error(errMessage, {
                    position: "top-center",
                    autoClose: 2000,
                });
            }
        }


    };

    return (
        <div className='dark:bg-gray-700 '>
            <div className=" py-12 container w-[90%] mx-auto">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 dark:text-white">Update a New Blog</h2>
                {/* <h3 className='text-sm sm:text-lg  text-center mb-10'> Submit detailed reviews for your favorite games effortlessly</h3> */}

                {isLoading ? (<div className="flex items-center min-h-screen justify-center">
                    <Skeleton count={3} height={120} width={200} />
                </div>) :
                    <form onSubmit={handleSubmit} className='bg-slate-200 py-10 px-6 shadow-lg rounded-xl' >
                        {/* form name and Blog Cover Image/Thumbnail */}
                        <div className=" md:flex mb-4 md:mb-8">
                            <div className="form-control md:w-1/2 mb-4 md:mb-0">
                                <label className="label">
                                    <span className="label-text">Blog Title</span>
                                </label>
                                <input type="text" name="title" defaultValue={title} placeholder="Enter Blog Title" className="input input-bordered w-full text-xs sm:text-base" required />
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                {/* Blog Cover Image/Thumbnail */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Blog Cover Image URL</span>
                                    </label>
                                    <input type="text" defaultValue={coverImage} name="coverImage" placeholder="Enter Blog Cover Image URL" className="input input-bordered w-full text-xs sm:text-base" required />

                                </div>
                            </div>

                        </div>

                        {/* category  and short details */}
                        <div className=" md:flex mb-4 md:mb-8">
                            <div className="form-control md:w-1/2 mb-4 md:mb-0">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <select name='category' value={genre}
                                    onChange={(e) => setGenre(e.target.value)} className="select select-bordered w-full text-xs sm:text-base" required>
                                    <option disabled>Select category</option>
                                    <option value="Fashion">Fashion</option>
                                    <option value="Inspiration">Inspiration</option>
                                    <option value="Travel">Travel</option>

                                </select>
                            </div>

                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <textarea name="shortDetails" defaultValue={shortDetails} placeholder="Short details" className="input input-bordered w-full text-xs sm:text-base" required />
                            </div>


                        </div>



                        {/* Long Details */}

                        <div className="form-control w-full mb-8">
                            <label className="label">
                                <span className="label-text">Long Description</span>
                            </label>
                            <textarea name="longDetails" defaultValue={longDetails} placeholder="Long Details" className="input input-bordered w-full text-xs sm:text-base" required />
                        </div>


                        <input type="submit" value="Submit Blog" className="btn btn-block bg-sky-600 text-white font-bold border-none" />
                    </form>

                }

                {/* <ToastContainer /> */}

            </div>
        </div>

    );
};

export default AddUpdate;