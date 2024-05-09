import useAuth from "../../Router/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Navber from "../../Shared/Navber/Navber";
import Banner from "./landingpageComponents/Banner";
import Howcanuse from "./landingpageComponents/Howcanuse";
import { useNavigate } from "react-router-dom";


const Landingpage = () => {
  const {user} = useAuth()
  const navigate = useNavigate();
  if(user){
    navigate("/dashboard")
  }
  return (
    <div>
      <Navber posi={"absolute"}></Navber>
      <Banner></Banner>
      <Howcanuse></Howcanuse>
      <Footer></Footer>
    </div>
  );
};

export default Landingpage;
