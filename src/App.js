// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AboutUs from "./pages/routerPages/AboutUs";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC LAYOUT */}
        <Route element={<MainLayout />}>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<AboutUs />} />
        </Route>

        {/* DASHBOARD LAYOUT */}
        {/* <Route path="/dashboard" element={<DashboardLayout />}> */}
          {/* <Route index element={<DashboardHome />} /> */}
          {/* <Route path="users" element={<Users />} /> */}
        {/* </Route> */}

        {/* 404 PAGE */}
        {/* <Route path="*" element={<NotFound />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
