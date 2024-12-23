import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllComments = ({ id, commentsUpdated }) => {
    console.log(id);
    const [commentData, setCommentData] = useState([]);

    useEffect(() => {
        fetchCommentData();
    }, [id, commentsUpdated]);

    const fetchCommentData = async () => {
        const { data } = await axios.get(`http://localhost:5000/commentList/${id}`);
        setCommentData(data);
    };
    console.log(commentData);

    // const [commentData, setCommentData] = useState([])

    // useEffect(() => {
    //     fetchCommentData()
    // }, [id])

    // const fetchCommentData = async () => {
    //     const { data } = await axios.get(
    //         `http://localhost:5000/commentList/${id}`
    //     )
    //     setCommentData(data);
    //     console.log(data);
    //     // setStartDate(new Date(data.deadline))
    // }

    // const {comment, commentOwnerName, commentOwnerImg} = commentData || {};


    return (
        <div>
          
      
        <div>
            {commentData.length === 0 ? (
                <div className="text-center">
                    <h3 className="text-xl text-gray-100">No comment Found</h3>
                </div>
            ) : (
                commentData.map((data, index) => (
                    <div key={index} className="flex flex-col p-6 gap-2 mb-3 my-3 border border-xl bg-slate-100">
                       <div className='flex  gap-1'>
                       <img src={data.commentOwnerImg} alt="User Avatar" className="w-8 h-8 rounded-full" />
                       <p className="font-semibold">{data.commentOwnerName}</p>
                       </div>
                        <div>
                            
                            <p className="text-gray-700">{data.comment}</p>
                        </div>
                    </div>
                ))
            )}
        </div>

        </div>
    );
};

export default AllComments;