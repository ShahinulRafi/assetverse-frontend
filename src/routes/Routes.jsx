import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import MainDashboard from "../pages/Dashboard/MainDashboard/MainDashboard";
import AddAssets from "../pages/Dashboard/AddAssets/AddAssets";
import ManageAssets from "../pages/Dashboard/ManageAssets/ManageAssets";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "main",
        Component: MainDashboard,
      },
      {
        path: "add-assets",
        Component: AddAssets,
      },
      {
        path: "manage-assets",
        Component: ManageAssets,
      },
    ],
  },
]);

export default router;
