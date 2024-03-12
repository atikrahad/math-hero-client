import { createBrowserRouter } from "react-router-dom";
import Landingpage from "../Layout/Landingpage/Landingpage";
import Login from "../Pages/Authentikate/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Landingpage></Landingpage>,
    },
    {
      path: "/login",
      element: <Login></Login>
    }
  ]);

export default router;