import React, { useState, useEffect, useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
// import axios from 'axios';
import Card from '../components/Card';
// import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import LazyLoad from 'react-lazyload';
import Skeleton from 'react-loading-skeleton';
// import { AuthProviderContext } from '../Provider/AuthProvider';

const AllBlogs = () => {
    // const allBlogs = useLoaderData();
    const [blogs, setBlogs] = useState([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    // const { loading } = useContext(AuthProviderContext)
    const [isLoading, setIsLoading] = useState(true);
    const [sort, setSort] = useState('');

    useEffect(() => {
        const fetchAllBlogs = async () => {
            setIsLoading(true);
            // console.log(sort);
            try {
                const { data } = await axios.get(
                    `https://assignment-11-server-one-kohl.vercel.app/blogs?category=${category}&search=${search}&sort=${sort}`
                )
                setBlogs(data)
            }
            catch (error) {
                // console.error("Error fetching blogs:", error);
            } finally {
                setIsLoading(false);
            }

        };
        fetchAllBlogs()
    }, [category, search, sort])





    // if(loading){
    //     return <div className="flex items-center min-h-screen justify-center">
    //         <Skeleton count={3} height={120} width={200} />
    //         {/* <span className="loading loading-infinity loading-lg flex items-center justify-center"></span> */}
    //     </div>
    // }



    return (
        <div className='dark:bg-gray-950 dark:text-white'>
            <div className='container w-[90%] mx-auto py-10 '>
                {/* Search and Category Filter */}
                <div className="flex flex-col sm:flex-row gap-y-3 sm:gap-y-0 items-start sm:items-center justify-between mt-10 mb-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by title"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-10 pr-4 py-2 border text-black rounded-sm w-full"
                        />
                        <FaSearch className="absolute left-3 top-3 text-gray-400" />
                    </div>

                    <select
                        value={category}
                        id={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="p-2 border text-black rounded-sm "
                    >
                        <option value="">All Categories</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Travel">Travel</option>
                        <option value="Inspiration">Inspiration</option>

                    </select>
                </div>
                <div className='mb-12'>
                    <select
                        value={sort}
                        id={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="p-2 border text-black rounded-sm"
                    >
                        <option value="">Sort By</option>
                        <option value="alphabetical">Blog Name(alphabetical)</option>
                    </select>
                </div>

                {/* Blog Cards */}
                {
                    isLoading ? (<div className="flex items-center h-screen justify-center">
                        <Skeleton count={3} height={120} width={200} />
                    </div>) :
                        blogs.length === 0 ? (
                            <div className="text-center">
                                <h3 className="text-xl text-gray-500 dark:text-white">No blogs Found.</h3>
                                <p>Add New Blogs.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {
                                    blogs.map((blog, index) => (
                                        <LazyLoad key={index} height={200} once debounce={400} >
                                            <Card
                                                blog={blog} ></Card>
                                        </LazyLoad>

                                    ))
                                }
                            </div>)
                }
            </div>
        </div>

    );
};

export default AllBlogs;
