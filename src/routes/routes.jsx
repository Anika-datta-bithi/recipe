import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pges/Home";
import About from "../pges/About";
import Register from "../pges/About";
import Login from "../pges/Login";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";

export const router=createBrowserRouter(
    [
        {
            path:"/",
            element:<MainLayout/>,
            children:[
                {
                    index:true,
                    element:<Home/>
                },
                // {
                //     path:"about",
                //     element:<About/>
                // },
            ],
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        },
        {
            path:"dashboard",
            element:(
               <PrivateRoute>
                   <DashboardLayout/>
                </PrivateRoute>
            ),
        },
    ]
)

