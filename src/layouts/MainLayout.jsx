// src/layouts/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="main-layout">

      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Page Content */}
      <main className="content">
        <Outlet />
      </main>

      {/* Canvas Trail */}
      <canvas
        className="cursor-trail d-none d-xl-block"
        id="trail"
      ></canvas>

      {/* Go To Top Button */}
      <button id="goTop">
        <span className="border-progress"></span>
        <span className="ic-wrap">
          <span className="icon icon-arrow-caret-right"></span>
        </span>
      </button>

      {/* Preloader */}
      <div className="preloader overflow-hidden">
        <div className="site-name">
          <span>DAVIES</span>
        </div>

        <div className="preloader-gutters">
          {Array.from({ length: 8 }).map((_, i) => (
            <div className="bar" key={i}>
              <div className="inner-bar"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Wrapper */}
      <div id="wrapper">
        <div className="tf-left-bar">
          <a
            className="btn-setting-color"
            data-bs-toggle="offcanvas"
            href="#settingColorMenu"
          >
            <i className="icon-gear"></i>
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default MainLayout;
