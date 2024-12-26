import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Card2 from './Card2';


const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchRecentBlogs();
  }, []);

  const fetchRecentBlogs = async () => {
    try {
      const { data } = await axios.get('https://assignment-11-server-one-kohl.vercel.app/recentBlogs');
      setBlogs(data);
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'Something went wrong!';
      toast.error(errorMessage);
    }
  };

  return (
    <div className="w-full mx-auto pt-14  bg-slate-300 rounded-b-lg " >
      <h1 className="text-3xl font-bold text-center mb-10 text-sky-500">Recent Blogs</h1>
      {
        blogs.length === 0 ? (
          <div className="text-center my-3">
            <h3 className="text-xl text-gray-500">No blogs Found.</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 " >
            {
              blogs.map((blog, index) => (
                <Card2 key={index}
                  blog={blog} ></Card2>
              ))
            }
          </div>)
      }
    </div>
  );
};

export default RecentBlogs;
