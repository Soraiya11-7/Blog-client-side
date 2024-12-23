import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthProviderContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Comment = ({id, onCommentAdded}) => {

    const {user} = useContext(AuthProviderContext);
    console.log(user);

    const handleSubmit = (e) => {

        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;
        
        const newComment = {comment, commentOwnerName:user?.displayName, blog_id:id, commentOwnerImg:user?.photoURL };

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
                e.target.reset();
                onCommentAdded(); 
                

            })

    };
    const handleComment = () =>{

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='bg-slate-300 py-2 px-6 shadow-lg rounded-xl' >
                <div className="form-control w-full mb-6">
                    <textarea name="comment" placeholder="write a comment here" className="input input-bordered w-full text-xs sm:text-base" required />
                </div>
                 
                 {
                    user?  ( <div className='flex items-center justify-center'>
                        <input type="submit" value=" Add Comment" className="btn btn-sm bg-purple-500 text-white font-bold border-none" />
                        </div>)
                        :
                        <Link to={Navigate(`/auth/login`)}>Add Comment</Link>


                 }
               
            </form>
        </div>
    );
};

export default Comment;