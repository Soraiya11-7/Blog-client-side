import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/featuredBlogs');
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching featured blogs:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Featured Blogs</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Short Description</th>
              <th className="border px-4 py-2">Blogger Name</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{blog.title}</td>
                <td className="border px-4 py-2">{blog.category}</td>
                <td className="border px-4 py-2">{blog.shortDetails}</td>
                <td className="border px-4 py-2">{blog.bloggerName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
