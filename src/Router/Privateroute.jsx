import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";


const Privateroute = ({ children }) => {
  const {user, loading} = useAuth()

  if (loading) {
    return <h1>Loading......</h1>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" replace></Navigate>;
};

export default Privateroute;
