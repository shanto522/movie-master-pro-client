import React from "react";
import errorImg from "../../assets/errorImg.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="min-h-screen flex justify-center items-center">
        <img src={errorImg} alt="" />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
