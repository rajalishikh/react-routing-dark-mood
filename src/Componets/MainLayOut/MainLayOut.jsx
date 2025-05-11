import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const MainLayOut = () => {
    return (
        <div>
            <div>
            <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(100vh-136px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayOut;