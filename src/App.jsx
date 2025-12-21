import './App.scss';
import { Outlet } from "react-router-dom";
import Header from '@components/header.jsx';
import Footer from '@components/footer.jsx';



function App() {
  return (
    <div className="main-container">
      <Header />
      <main className="homeContent">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;





