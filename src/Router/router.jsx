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
import Childgame from "../Layout/Dashboard/Pages/Childgame/Childgame";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element: <Landingpage></Landingpage>
      },
      {
        path: "/childgame",
        element: <Childgame></Childgame>,
      },
      {
        path: '/problems',
        element: (
          
            <Problems></Problems>
          
        ),
      },
      {
        path: "/addproblem",
        element: <Privateroute><AddEditor></AddEditor></Privateroute>,
      },
      {
        path: "/notes",
        element: <Privateroute><Note></Note></Privateroute>,
      },
      {
        path: "/leaderboard",
        element: <Privateroute><Leaderboard></Leaderboard></Privateroute>,
      },
      {
        path: "/profile",
        element: <Privateroute><Profile></Profile></Privateroute>,
      },
      {
        path: "/:id",
        element: <Privateroute><Details></Details></Privateroute>,
      },
    ],
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
    
  },
]);

export default router;
