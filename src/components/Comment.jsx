import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthProviderContext } from '../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useAxiosSecure from '../hooks/useAxiosSecure';

const Comment = ({ id, onCommentAdded }) => {

    const { user } = useContext(AuthProviderContext);
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    // console.log(user);

    const handleSubmit = async (e) => {

        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;

        const newComment = { comment, commentOwnerName: user?.displayName,commentOwnerEmail:user?.email, blog_id: id, commentOwnerImg: user?.photoURL };

        if (!user) {
            toast.warning("Not loggedIn");
            navigate('/auth/login', { state: `/blog/${id}` });
        }
        else {

            try {
                const response = await axiosSecure.post(`/commentList`,
                    newComment)
                console.log(response);
                if (response.data?.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Comment Added Successfully!!!",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                }
                e.target.reset();
                onCommentAdded();
            } catch (err) {
                const errorMessage = err.response?.data?.message || err.message || 'Something went wrong!';
                toast.error(errorMessage)
            }
        }

    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='bg-slate-300 py-2 px-6 shadow-lg rounded-xl' >
                <div className="form-control w-full mb-6">
                    <textarea name="comment" placeholder="write a comment here" className="input input-bordered w-full text-xs sm:text-base" required />
                </div>

                <div className='flex items-center justify-center'>
                    <input type="submit" value=" Add Comment" className="btn btn-sm bg-purple-500 text-white font-bold border-none" />
                </div>


            </form>
            {/* <ToastContainer></ToastContainer> */}
        </div>
    );
};

export default Comment;