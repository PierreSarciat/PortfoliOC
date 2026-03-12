import Navbar from "@components/navbar/navbar.jsx";
import Footer from "@components/footer/footer.jsx";
import ScrollToTop from '@components/ScrollToTop/scrollToTop.jsx';
import { Outlet } from "react-router-dom";

function Layout() {
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
