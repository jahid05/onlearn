import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="font-raleway">
      <Navbar />
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default MainLayout;
