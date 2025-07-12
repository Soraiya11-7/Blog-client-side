import React from 'react';
import Newsletter from '../components/Newsletter';

import RecentBlogs from '../components/RecentBlogs';
import Banner from '../components/Banner';
import ExtraOne from '../components/ExtraOne';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ContactForm from '../components/ContactForm';
const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
       easing: "ease-out-cubic", 
        })
      },[]);
    return (
        <div className='w-full mx-auto dark:shadow-xl dark:shadow-black dark:bg-gray-950  text-black dark:text-white'>
            <Banner></Banner>
            
            <RecentBlogs></RecentBlogs>
           <ExtraOne></ExtraOne>
            <ContactForm></ContactForm>
            <Newsletter></Newsletter>
             
           
        </div>
    );
};

export default Home;