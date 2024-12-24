import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchRecentBlogs();
  }, []);

  const fetchRecentBlogs = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/recentBlogs');
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching recent blogs:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recent Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.title}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition"
          >
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="rounded-md mb-4 w-full h-40 object-cover"
            />
            <button className='bg-sky-200 rounded-full px-2 py-1 mb-3 '>{blog.category}</button>
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-4">{blog.shortDetails}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <img
                src={blog.userLogo}
                alt={blog.bloggerName}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p>{blog.bloggerName}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
