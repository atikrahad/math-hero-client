import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import auth from "../Firebase/firebase";
import { setToggle, setUser } from "../Redux/Features/authSlice";

const Privateroute = ({ children }) => {
  const dispatch = useDispatch();
  const { email, isPending } = useSelector((state) => state.authenTication);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        dispatch(
          setUser({
            name: user.displayName,
            email: user.email,
          })
        );
        dispatch(
          setToggle({
            insPending: false,
          })
        );
      } else {
        dispatch(
          setToggle({
            insPending: false,
          })
        );
      }
    });
  }, []);

  if (isPending) {
    return <h1>Loading</h1>;
  }

  if (email) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default Privateroute;
