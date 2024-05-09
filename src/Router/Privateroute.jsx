import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";
import loadimg from "../assets/Loading/loading.gif"


const Privateroute = ({ children }) => {
  const {user, loading} = useAuth()

  if (loading) {
    return <div className="h-[80vh] justify-center flex items-center">
      <img className="w-40" src={loadimg} alt="" />
    </div>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" replace></Navigate>;
};

export default Privateroute;
