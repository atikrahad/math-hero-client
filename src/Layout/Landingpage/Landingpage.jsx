import useAuth from "../../Router/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Navber from "../../Shared/Navber/Navber";
import Banner from "./landingpageComponents/Banner";
import Howcanuse from "./landingpageComponents/Howcanuse";
import { Navigate } from "react-router-dom";

const Landingpage = () => {
  const { user } = useAuth();

  return (
    <div>
      <Banner></Banner>
      <Howcanuse></Howcanuse>
    </div>
  );
};

export default Landingpage;
