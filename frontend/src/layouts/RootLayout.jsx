import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/Navbar/NavBar";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default RootLayout;
