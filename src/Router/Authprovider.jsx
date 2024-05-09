import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase";
export const Authcontext = createContext();
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = ()=>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubcribe = onAuthStateChanged((auth), user=>{
        setLoading(false)
        setUser(user)
    })
    return unsubcribe
  },[])

  const info = {
    user,
    Loading,
    loginUser,
    logout,
    createUser
  };
  return <Authcontext.Provider value={info}>{children}</Authcontext.Provider>;
};

export default Authprovider;
