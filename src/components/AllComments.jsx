import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import { toast } from 'react-toastify';

const AllComments = ({ id, commentsUpdated }) => {
    const [commentData, setCommentData] = useState([]);

    useEffect(() => {
        fetchCommentData();
    }, [id, commentsUpdated]);

    const fetchCommentData = async () => {
        try {
            const { data } = await axios.get(`https://assignment-11-server-one-kohl.vercel.app/commentList/${id}`);
           setCommentData(data);

        } catch (error) {
            toast.error('Failed to fetch comment data.');
        }
        
    };

    return (
        <div className='w-full md:w-[80%] md:ml-4 p-2 md:p-4'>
          
        <div className=''>
            {commentData.length === 0 ? (
                <div className="text-center">
                    <h3 className="text-base sm:text-xl ">No comment Found</h3>
                </div>
            ) : (
                commentData.map((data, index) => (
                    <LazyLoad key={index} height={200} once debounce={500} >
                        <div  className="flex flex-col p-6 gap-2 mb-3 my-3 border border-xl bg-gradient-to-br from-black via-gray-900  to-sky-500 text-white rounded-xl ">
                       <div className='flex gap-2'>
                       <img src={data.commentOwnerImg} alt="User Avatar" className="w-8 h-8 rounded-full border-2" />
                       <p className="font-semibold text-sm sm:text-base">{data.commentOwnerName}</p>
                       </div>
                        <div className='w-[85%]'>
                            <p className="text-white text-xs sm:text-sm">{data.comment}</p>
                        </div>
                    </div>
                    </LazyLoad>
                    
                ))
            )}
        </div>

        </div>
    );
};

export default AllComments;