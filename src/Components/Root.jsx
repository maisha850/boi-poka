import React from 'react';
import Navbar from './Pages/navbar';
import Footer from './Pages/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
           <main className='max-w-6xl mx-auto'>
             <Outlet></Outlet>
           </main>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;