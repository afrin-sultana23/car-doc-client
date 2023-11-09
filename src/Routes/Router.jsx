
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import CheckOut from "../pages/checkout/CheckOut";
import Allbooking from "../pages/Allbooking/Allbooking";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/", 
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>, 
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "signup",
            element: <SignUp></SignUp>
        },
        {
            path: "checkout/:id",
            element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
        },
        {
            path: "bookings",
            element: <PrivateRoute><Allbooking></Allbooking></PrivateRoute>
        }
       ]
    },
  ]);

export default router;