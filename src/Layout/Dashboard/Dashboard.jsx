
import { Outlet } from "react-router-dom";

import Navber from "../../Shared/Navber/Navber";
import Footer from "../../Shared/Footer/Footer";
import { useState } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const {value} =useSelector(state => state.theme)
  
  return (
    <div data-theme={value}>
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  );
};

export default Dashboard;
