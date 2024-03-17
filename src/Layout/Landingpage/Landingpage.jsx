import { useSelector } from "react-redux";
import Footer from "../../Shared/Footer/Footer";
import Navber from "../../Shared/Navber/Navber";
import Banner from "./landingpageComponents/Banner";
import Howcanuse from "./landingpageComponents/Howcanuse";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Landingpage = () => {
  const { email } = useSelector((state) => state.authenTication);
  const navigate = useNavigate();
  useEffect(() => {
    if (email) {
      window.addEventListener("focus", () => {
        navigate("/dashboard");
      });
    } else {
      navigate("/");
    }
  }, [email]);
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
