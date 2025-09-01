
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="main-layout">
      {/* Navbar always on top */}
      <Navbar />

      {/* Dynamic Page Content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;
