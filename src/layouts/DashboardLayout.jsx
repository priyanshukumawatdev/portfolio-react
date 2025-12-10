// src/layouts/DashboardLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";
// import Topbar from "../components/shared/Topbar";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        {/* <Topbar /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
