import Navbar from "@components/navbar/navbar.jsx";
import Footer from "@components/footer/footer.jsx";
import ScrollToTop from '@components/ScrollToTop/scrollToTop.jsx';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from "react-router-dom";

function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <ScrollToTop />
            <div className="main-container">
                <Navbar />
                <main className="heroContent">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Layout;
