import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Registration from "../pages/Registration";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Login";
import SecretRoutes from "./SecretRoutes";
import AddBlog from "../pages/AddBlog";
import AllBlogs from "../pages/AllBlogs";
import WishList from "../pages/WishList";
import BlogDetails from "../pages/BlogDetails";
import AddUpdate from "../pages/AddUpdate";
import FeaturedBlogs from "../pages/FeaturedBlogs";


const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,   
        },
        {
          path: "/addBlog",
          element: <SecretRoutes><AddBlog></AddBlog></SecretRoutes>,
        },
        {
          path: "/blogs",
          element: <AllBlogs></AllBlogs> ,
          loader: () => fetch("http://localhost:5000/blogs"),
        },
        {
          path: "/blog/:id",
          element: <BlogDetails></BlogDetails> ,
          
        },
        {
          path: "/wishlist",
          element: <SecretRoutes><WishList></WishList></SecretRoutes> ,
        },
        {
          path: "/update/:id",
          element: <SecretRoutes><AddUpdate></AddUpdate></SecretRoutes> ,
        },
        {
            path: "/featuredBlogs",
            element: <FeaturedBlogs></FeaturedBlogs>,
          },
          {
            path: "auth",
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: "/auth/login",
                    element: <Login></Login>,
                },
                {
                    path: "/auth/register",
                    element: <Registration></Registration>,
                },
               
            ],
        },

      ]
    },
   
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionStatusRevalidation: true
    },
  }
);

  export default router;