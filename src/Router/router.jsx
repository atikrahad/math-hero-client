import { createBrowserRouter } from "react-router-dom";
import Landingpage from "../Layout/Landingpage/Landingpage";
import Login from "../Pages/Authentikate/Login";
import Register from "../Pages/Authentikate/Register";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Problems from "../Layout/Dashboard/Pages/Problems/Problems";
import AddEditor from "../Layout/Dashboard/Pages/Createproblem/AddEditor";
import Note from "../Layout/Dashboard/Pages/MyNote/Note";


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
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          index: true,
          element: <Problems></Problems>
        },
        {
          path: "/dashboard/addproblem",
          element: <AddEditor></AddEditor>
        },
        {
          path: "/dashboard/notes",
          element: <Note></Note>
        },
      ]
    }
  ]);

export default router;