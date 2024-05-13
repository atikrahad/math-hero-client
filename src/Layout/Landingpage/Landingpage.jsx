import useAuth from "../../Router/useAuth";
import Banner from "./landingpageComponents/Banner";
import Howcanuse from "./landingpageComponents/Howcanuse";
import Servies from "./landingpageComponents/Servies";

const Landingpage = () => {
  const { user } = useAuth();

  return (
    <div>
      <Banner></Banner>
      <Servies></Servies>
      <Howcanuse></Howcanuse>
    </div>
  );
};

export default Landingpage;
