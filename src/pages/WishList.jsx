import React, { useContext, useEffect, useState } from "react";
import { AuthProviderContext } from "../Provider/AuthProvider";
import { AiFillDelete } from "react-icons/ai"; // Importing a delete icon from react-icons
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useContext(AuthProviderContext); // Get the logged-in user from the AuthContext

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/wishlist?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setWishlist(data))
        // .catch((error) => alert(error));
    }
    console.log(wishlist);
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/wishlist/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your blog from wishlist has been deleted.",
                icon: "success"
              });
              const remaining = wishlist.filter(blog => blog._id !== _id);
              setWishlist(remaining);
            }
          })
      }
    });
  };

  return (
    <div className="w-[80%] mx-auto py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">My wishlist</h2>
      {wishlist.length === 0 ? (
        <div className="text-center">
          <h3 className="text-xl text-gray-500">Your wishlist is empty.</h3>
          <p>Add blogs to your wishlist from the Review Details page.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-purple-500">
            <thead>
              <tr className="bg-purple-400">
                <th className="border border-purple-500 py-2 text-sm md:text-base lg:text-lg">No.</th>
                <th className="border border-purple-500 py-2 text-sm md:text-base lg:text-lg">Thumbnail</th>
                <th className="border border-purple-500 py-2 text-sm md:text-base lg:text-lg ">blog Title</th>
                <th className="border border-purple-500 px-1 py-2 text-sm md:text-base lg:text-lg">Category</th>
                <th className="border border-purple-500 py-2 text-sm md:text-base lg:text-lg">Writer</th>
                <th className="border border-purple-500 px-1 py-2 text-sm md:text-base lg:text-lg">Description</th>

                <th className="border border-purple-500 py-2 text-sm md:text-base lg:text-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((blog, index) => (
                <tr key={blog._id} className="text-center bg-purple-100">
                  <td className="border border-purple-500  py-2 text-sm md:text-base  ">{index + 1}</td>
                  <td className="border border-purple-500 py-2 text-center " >
                    <div className="inline-flex justify-center items-center">
                      <img
                        src={blog.coverImage}
                        alt="Blog Cover"
                        className="w-6 md:w-12 h-6 md:h-12 rounded-full object-cover overflow-hidden"
                      />
                    </div>
                  </td>
                  <td className="border border-purple-500  py-2 text-sm md:text-base ">{blog.title}</td>
                  <td className="border border-purple-500  py-2 text-sm md:text-base  ">{blog.category}</td>
                 
                  <td className="border border-purple-500  py-2 text-sm md:text-base" >{blog.bloggerName}</td>
                  <td className="border border-purple-500  py-2 text-sm md:text-base  ">{blog.shortDetails}</td>

                  <td className="border border-purple-500 py-2 text-sm md:text-base  ">
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className=" text-center text-red-600 rounded-full transition-all duration-300"
                    >
                      <AiFillDelete className="text-center" size={20} />
                    </button>
                   <Link to={`/blogs/${blog._id}`}>
                   <button
                      onClick={() => handleDelete(blog._id)}
                      className=" text-center text-orange-950 rounded-xl transition-all duration-300"
                    >
                      view
                    </button>
                   </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default WishList;
