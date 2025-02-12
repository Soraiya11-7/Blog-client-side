import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../components/Table';
import { toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';
import { AuthProviderContext } from '../Provider/AuthProvider';
const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { user, loading } = useContext(AuthProviderContext);
  console.log(loading);

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('https://assignment-11-server-one-kohl.vercel.app/featuredBlogs');
      setBlogs(data);
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'Something went wrong!';
      toast.error(errorMessage);
    }finally {
      setIsLoading(false);
    }
  };


  // if(loading){
  //     return <div className="flex items-center min-h-screen justify-center">
  //         <Skeleton count={3} height={120} width={200} />
  //         {/* <span className="loading loading-infinity loading-lg flex items-center justify-center"></span> */}
  //     </div>
  // }

  return (
    <div className='dark:bg-gray-700 dark:text-white'>
        <div className="container w-[90%] mx-auto py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-3">Featured Blogs</h1>
      <h3 className='text-center text-base mb-14 w-[80%] md:w-[60%] mx-auto'>Discover handpicked top blogs sorted dynamically by relevance, displayed in a responsive, sortable table</h3>
      {
        isLoading ? (<div className="flex items-center min-h-screen justify-center">
          <Skeleton count={3} height={120} width={200} />
        </div>) 
        :
          blogs && blogs.length === 0 ? (
            <div className="text-center">
              <h3 className="text-xl text-gray-500">No Blogs Found!!</h3>
            </div>
          ) :
            (<div>
              <Table blogs={blogs}></Table>
            </div>)
      }


    </div>
    </div>
  
  );
};

export default FeaturedBlogs;
