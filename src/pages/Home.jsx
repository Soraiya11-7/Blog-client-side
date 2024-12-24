import React from 'react';
import Newsletter from '../components/Newsletter';
import Demo from '../components/Demo';

const Home = () => {
    return (
        <div className='w-[80%] mx-auto'>
            This is home
            <Newsletter></Newsletter>

            <Demo></Demo>
        </div>
    );
};

export default Home;