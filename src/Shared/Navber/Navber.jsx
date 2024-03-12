import { NavLink } from "react-router-dom";
import Button from "../../Components/Button";
import Logo from "../../Components/Logo";

const Navber = () => {
  return (
    <div className=" shadow-lg ">
      <div className="flex justify-between items-center py-4 mx-auto max-w-screen-xl ">
        <div className="flex items-center gap-5">
          <Logo></Logo>
          <ul className="space-x-4">
            <NavLink>Home</NavLink>
            <NavLink>Problem</NavLink>
            <NavLink>Contest</NavLink>
            <NavLink>Leaderboard</NavLink>
            <NavLink>Profile</NavLink>
          </ul>
        </div>
        <div className="space-x-3">
          <button>
            <Button title={"Login"}></Button>
          </button>
          <button>
            <Button title={"Register"}></Button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
