import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      <header className="w-full sticky top-0 z-50 shadow-md">
        <Navbar />
      </header>

      <main className="flex-1 w-full  px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>

      <footer className="w-full mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
