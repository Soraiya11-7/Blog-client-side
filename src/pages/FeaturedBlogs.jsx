import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../components/Table';
import { toast } from 'react-toastify';
const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get('https://assignment-11-server-one-kohl.vercel.app/featuredBlogs');
      setBlogs(data);
    } catch (error) {
       const errorMessage = error.response?.data?.message || error.message || 'Something went wrong!';
        toast.error(errorMessage);
    }
  };


  return (
    <div className="w-[80%] mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-3">Featured Blogs</h1>
      <h3 className='text-center text-lg mb-12 w-[80%] md:w-[60%] mx-auto'>Discover handpicked top blogs sorted dynamically by relevance, displayed in a responsive, sortable table</h3>

      <div>
        <Table  blogs={blogs}></Table>
      </div>
   
    </div>
  );
};

export default FeaturedBlogs;
