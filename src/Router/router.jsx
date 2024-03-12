import { createBrowserRouter } from "react-router-dom";
import Landingpage from "../Layout/Landingpage/Landingpage";
import Login from "../Pages/Authentikate/Login";
import Register from "../Pages/Authentikate/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Landingpage></Landingpage>,
    },
    {
      path: "/login",
      element: <Login></Login>
    }
    ,
    {
      path: "/register",
      element: <Register/>
    }
  ]);

export default router;