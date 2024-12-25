import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Card from '../components/Card';
// import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

const AllBlogs = () => {
    // const allBlogs = useLoaderData();
    const [blogs, setBlogs] = useState([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
      const fetchAllBlogs = async () => {
        const { data } = await axios.get(
          `http://localhost:5000/blogs?category=${category}&search=${search}`
        )
        setBlogs(data)
      }
      fetchAllBlogs()
    }, [category, search])
  

    return (
        <div className='w-[80%] mx-auto py-10'>
            {/* Search and Category Filter */}
            <div className="flex items-center justify-between my-10">
                <input
                    type="text"
                    placeholder="Search by title"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="p-2 border"
                />
                <select
                    value={category}
                    id={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-2 border"
                >
                    <option value="">All Categories</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Travel">Travel</option>
                    <option value="Inspiration">Inspiration</option>

                </select>
            </div>

            {/* Blog Cards */}
            {
                blogs.length === 0 ? (
                    <div className="text-center">
                        <h3 className="text-xl text-gray-500">No blogs Found.</h3>
                        <p>Add New Blogs.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            blogs.map((blog) => (
                                <Card key={blog._id}
                                    blog={blog} ></Card>)
                            )
                        }
                    </div>)
            }
        </div>
    );
};

export default AllBlogs;
