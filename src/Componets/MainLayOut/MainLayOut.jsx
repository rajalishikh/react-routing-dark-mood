import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const MainLayOut = () => {
    return (
        <div>
            <div>
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayOut;