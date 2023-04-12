import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./components/LayOut/Main";
import Statistics from "./components/Statistics/Statistics";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import StartApplying from "./components/StartApplying/StartApplying";
import Blog from "./components/Blog/Blog";
import Error from "./components/Error/Error";
import Jobs from "./components/Jobs/Jobs";
import JobDetails from "./components/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:()=> fetch('/jobData.json') 
      },
      {
        path: "/jobdetails",
        element: <JobDetails />,
        
      },
      
      {
      path:"statistics",
      element:<Statistics/>
      },
      {
        path:"appliedjobs",
        element:<AppliedJobs/>
      },
      {
        path:"startapplying",
        element:<StartApplying/>
      },
      {
        path:'blog',
        element:<Blog/>
      },
      
      {
        path:"*",
        element:<Error/>
      }
    ],
    
  },
  {
    path:'/jobs',
    element:<Jobs/>,
    

  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
