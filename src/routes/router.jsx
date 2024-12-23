import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";

import AddService from "../pages/AddService";
import MyReviews from "../pages/MyReviews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Services from "../pages/Services";
import ServiceDetails from "../component/ServiceDetails";
import MyServices from "../pages/MyServices";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/services",
            element: <Services></Services>
        },
        {
            path: "/services/:id",
            element: <PrivateRoute>
                <ServiceDetails></ServiceDetails>
            </PrivateRoute>
        },
        {
            path: "/addService",
            element: <PrivateRoute>
                <AddService></AddService>
            </PrivateRoute>
        },
        {
            path: "/myReviews",
            element: <PrivateRoute>
                <MyReviews></MyReviews>
            </PrivateRoute>
        },
        {
           path: "/myServices",
           element: <PrivateRoute>
            <MyServices></MyServices>
           </PrivateRoute>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        }
      ]
    },
  ]);

export default router;