import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="flex bg-white flex-col min-h-screen font-ralewayM">
      {/* <ToastContainer /> */}
      <div className="top-0">
        <Navbar />
      </div>

      {/* <Sidebar /> */}
      <div className="flex-auto overflow-hidden  ">
        <Outlet />
      </div>

      {/* <MusicPlayer />*/}

      <Footer /> 
    </div>
  );
};

export default Layout;
