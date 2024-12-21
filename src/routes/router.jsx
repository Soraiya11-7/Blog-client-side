import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";


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
          element: <h2>Add Blog</h2>,
        },
        {
          path: "/blogs",
          element: <h2>All Blogs</h2> ,
        },
        {
          path: "/wishlist",
          element: <h2> My Wishlist</h2> ,
        },
        {
            path: "/featuredBlogs",
            element: <h2>Featured Blogs</h2> ,
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