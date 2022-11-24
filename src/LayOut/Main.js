import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shered/Footer/Footer';
import Navbar from '../Pages/Shered/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <hr></hr>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;