import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Card from '../components/Card';
import { useLoaderData } from 'react-router-dom';

const AllBlogs = () => {
    const allBlogs = useLoaderData();
    const [blogs, setBlogs] = useState(allBlogs);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('all');


    useEffect(() => {
        const applyFilters = async () => {
            let filteredData = [...allBlogs];
      
            // Filter locally by category
            if (category !== 'all') {
              filteredData = filteredData.filter(blog =>
                blog.category.toLowerCase() === category.toLowerCase()
              );
            }
      
            // Fetch from server for search query
            if (search) {
              const searchResults = await fetchBlogs(search);
              if (category !== 'all') {
                filteredData = searchResults.filter(blog =>
                  blog.category.toLowerCase() === category.toLowerCase()
                );
                setBlogs(filteredData);
              }
              else{
                setBlogs(searchResults);
              }
            // setBlogs(searchResults);
            } else {
              // Use local data if no search query
              setBlogs(filteredData);
            }
          };
      
          applyFilters();



    }, [allBlogs, category, search]);

    const fetchBlogs = async (searchTitle) => {
        try {
         
          const response = await fetch(`http://localhost:5000/blogs?title=${encodeURIComponent(searchTitle)}`);
    
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
    
          const fetchedBlogs = await response.json();
          console.log(fetchedBlogs);
          return fetchedBlogs; // Return the fetched blogs 
        } catch (error) {
          console.error('Error fetching blogs:', error.message);
          return [];
        }
      };


    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
    };


    return (
        <div className='w-[80%] mx-auto py-10'>
            {/* Search and Category Filter */}
            <div className="flex items-center justify-between my-10">
                <input
                    type="text"
                    placeholder="Search by title"
                    value={search}
                    onChange={handleSearch}
                    className="p-2 border"
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-2 border"
                >
                    <option value="all">All Categories</option>
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
