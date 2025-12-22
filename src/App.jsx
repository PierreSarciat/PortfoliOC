import './App.scss';
import { Outlet } from "react-router-dom";
import Header from '@components/header.jsx';
import Footer from '@components/footer.jsx';
import ScrollToTop from '@components/scrollToTop';



function App() {
  return (
    <>
      <ScrollToTop />
      <div className="main-container">
        <Header />
        <main className="homeContent">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;




