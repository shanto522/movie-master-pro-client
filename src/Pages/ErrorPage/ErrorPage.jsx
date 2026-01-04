import React from "react";
import errorImg from "../../assets/errorImg.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
const ErrorPage = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 shadow-sm">
        <Navbar></Navbar>
      </header>
      <main className="min-h-screen flex justify-center items-center">
        <img src={errorImg} alt="" />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
