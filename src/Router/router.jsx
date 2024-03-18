import { createBrowserRouter } from "react-router-dom";
import Landingpage from "../Layout/Landingpage/Landingpage";
import Login from "../Pages/Authentikate/Login";
import Register from "../Pages/Authentikate/Register";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Problems from "../Layout/Dashboard/Pages/Problems/Problems";
import AddEditor from "../Layout/Dashboard/Pages/Createproblem/AddEditor";
import Note from "../Layout/Dashboard/Pages/MyNote/Note";
import Privateroute from "./Privateroute";
import Profile from "../Layout/Dashboard/Pages/Profile/Profile";
import Details from "../Layout/Dashboard/Pages/Problems/Details";
import Leaderboard from "../Layout/Dashboard/Pages/Leaderboard/Leaderboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage></Landingpage>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element: (
          
            <Problems></Problems>
          
        ),
      },
      {
        path: "/dashboard/addproblem",
        element: <Privateroute><AddEditor></AddEditor></Privateroute>,
      },
      {
        path: "/dashboard/notes",
        element: <Privateroute><Note></Note></Privateroute>,
      },
      {
        path: "/dashboard/leaderboard",
        element: <Privateroute><Leaderboard></Leaderboard></Privateroute>,
      },
      {
        path: "/dashboard/profile",
        element: <Privateroute><Profile></Profile></Privateroute>,
      },
      {
        path: "/dashboard/:id",
        element: <Details></Details>,
      },
    ],
  },
]);

export default router;
