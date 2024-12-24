import React from 'react';
import Newsletter from '../components/Newsletter';

import RecentBlogs from '../components/RecentBlogs';

const Home = () => {
    return (
        <div className='w-[80%] mx-auto'>
            This is home
            <Newsletter></Newsletter>
              <RecentBlogs></RecentBlogs>
           
        </div>
    );
};

export default Home;