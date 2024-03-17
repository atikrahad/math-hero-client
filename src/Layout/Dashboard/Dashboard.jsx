import { Outlet } from "react-router-dom";

import Navber from "../../Shared/Navber/Navber";
import Footer from "../../Shared/Footer/Footer";

const Dashboard = () => {
  return (
    <div id="dashboard">
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
