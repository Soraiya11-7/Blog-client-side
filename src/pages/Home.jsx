import React from 'react';
import Newsletter from '../components/Newsletter';

import RecentBlogs from '../components/RecentBlogs';
import Banner from '../components/Banner';
import Demo from '../components/Demo';
import ExtraOne from '../components/ExtraOne';
// import { PiFlagBanner } from 'react-icons/pi';

const Home = () => {
    return (
        <div className='w-[80%] mx-auto'>
            <Banner></Banner>
           <ExtraOne></ExtraOne>
            <Demo></Demo>
            <Newsletter></Newsletter>
              <RecentBlogs></RecentBlogs>
           
        </div>
    );
};

export default Home;