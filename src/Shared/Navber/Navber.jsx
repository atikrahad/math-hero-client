import { NavLink } from "react-router-dom";
import Button from "../../Components/Button";
import Logo from "../../Components/Logo";
import { signOut } from "firebase/auth";
import auth from "../../Firebase/firebase";

const Navber = () => {
  return (
    <div className=" shadow-lg ">
      <div className="flex justify-between items-center py-4 mx-auto max-w-screen-xl ">
        <div className="flex items-center gap-5">
          <Logo></Logo>
          <ul className="space-x-4">
            <NavLink>Home</NavLink>
            <NavLink to="/dashboard">Problem</NavLink>
            <NavLink to="/dashboard/addproblem">Add Problem</NavLink>
            <NavLink>Leaderboard</NavLink>
            <NavLink to="notes">My Note</NavLink>
            <NavLink>Profile</NavLink>
          </ul>
        </div>
        <div className="flex space-x-3">
          <NavLink to="/login">
            <Button title={"Login"}></Button>
          </NavLink>
          <NavLink to="/register">
            <Button title={"Register"}></Button>
            <button onClick={()=> signOut(auth)}>logout</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navber;
