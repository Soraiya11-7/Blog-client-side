import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthProviderContext } from '../Provider/AuthProvider';
// import Swal from 'sweetalert2';
// import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import { format } from 'date-fns';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';

const AddBlog = () => {

    const { user } = useContext(AuthProviderContext);
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    // const date = format(new Date(), 'PP');
    // console.log(date);

    const [bloggerEmail, setBloggerEmail] = useState(user?.email || '');
    const [bloggerName, setBloggerName] = useState(user?.displayName || '');
    const [userLogo, setUserLogo] = useState(user?.photoURL || '');


    useEffect(() => {
        if (user) {
            setBloggerEmail(user.email);
            setBloggerName(user.displayName);
            setUserLogo(user.photoURL);
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const category = form.category.value;
        const shortDetails = form.shortDetails.value;
        const longDetails = form.longDetails.value;
        const coverImage = form.coverImage.value;

        const newBlog = { title, category, longDetails, shortDetails, coverImage, bloggerEmail, bloggerName, userLogo };

        console.log(newBlog);

        try {
            const response = await axiosSecure.post(`/blogs`,
                newBlog)
            console.log(response);
            if (response.data?.insertedId) {
                Swal.fire({
                    title: "Success!",
                    text: "Blog Added Successfully!!!",
                    icon: "success",
                    confirmButtonText: "Cool",
                });
            }
            form.reset()
            navigate('/blogs')
        } catch (err) {
             const errorMessage = err.response?.data?.message || err.message || 'Something went wrong!';
            toast.error(errorMessage)
        }

        // fetch("http://localhost:5000/blogs", {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newBlog)
        // })
        //     .then(res => res.json())
        //     .then(data => {

        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'Blog added Successfully',
        //                 icon: 'success',
        //                 confirmButtonText: 'Cool'
        //             })
        //             navigate('/');
        //         }
        //     })


    };

    return (
        <div className=" py-12 w-[80%] mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3">Add a New Blog</h2>
            {/* <h3 className='text-sm sm:text-lg  text-center mb-10'> Submit detailed reviews for your favorite games effortlessly</h3> */}
            <form onSubmit={handleSubmit} className='bg-slate-300 py-10 px-6 shadow-lg rounded-xl' >
                {/* form name and Blog Cover Image/Thumbnail */}
                <div className=" md:flex mb-4 md:mb-8">
                    <div className="form-control md:w-1/2 mb-4 md:mb-0">
                        <label className="label">
                            <span className="label-text">Blog Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Enter Blog Title" className="input input-bordered w-full text-xs sm:text-base" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        {/* Blog Cover Image/Thumbnail */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Blog Cover Image URL</span>
                            </label>
                            <input type="text" name="coverImage" placeholder="Enter Blog Cover Image URL" className="input input-bordered w-full text-xs sm:text-base" required />

                        </div>
                    </div>

                </div>

                {/* category  and short details */}
                <div className=" md:flex mb-4 md:mb-8">
                    <div className="form-control md:w-1/2 mb-4 md:mb-0">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name='category' defaultValue={'Select category'} className="select select-bordered w-full text-xs sm:text-base" required>
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
                        <textarea name="shortDetails" placeholder="Short details" className="input input-bordered w-full text-xs sm:text-base" required />
                    </div>


                </div>



                {/* Long Details */}

                <div className="form-control w-full mb-8">
                    <label className="label">
                        <span className="label-text">Long Description</span>
                    </label>
                    <textarea name="longDetails" placeholder="Long Details" className="input input-bordered w-full text-xs sm:text-base" required />
                </div>


                <input type="submit" value="Submit Blog" className="btn btn-block bg-purple-500 text-white font-bold border-none" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddBlog;
