import Footer from "../../Shared/Footer/Footer";
import Navber from "../../Shared/Navber/Navber";
import Banner from "./landingpageComponents/Banner";
import Howcanuse from "./landingpageComponents/Howcanuse";

const Landingpage = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <Howcanuse></Howcanuse>
            <Footer></Footer>
        </div>
    );
};

export default Landingpage;