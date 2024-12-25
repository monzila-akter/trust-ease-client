import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../component/navbar/Navbar';
import Footer from '../component/footer/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {

    const location = useLocation();

    const dynamicTitles = {
        "/": "Home | Trust Ease",
        "/services": "Services | Trust Ease",
        "/addService": "Add Service | Trust Ease",
        "/myServices": "My Services | Trust Ease",
        "/login": "Login | Trust Ease",
        "/register": "Register | Trust Ease",
        "/details": " Details | Trust Ease",
        "/myReviews": "My Reviews | Trust Ease"
    }

    useEffect(() => {
        const currentPath = location.pathname;
        const title = dynamicTitles[currentPath] || "Trust Ease";
        document.title = title;
    }, [location])

    return (
        <div>
            <Toaster></Toaster>
            <Navbar></Navbar>
           <div >
           <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;