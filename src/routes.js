import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import App from "./App.js";
import CategoriesManager from "./pages/manage-categories/CategoriesManager";
import RequestsManager from "./pages/manage-requests/RequestsManager.jsx";
import MedicinesManager from "./components/manage-medicines/MedicinesManager";
import NotFound from "./shared/NotFound.jsx";
import UsersManager from "./components/manage-users/UsersManager.jsx";
import MedicinesList from "./pages/medicines-list/MedicinesList.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/manage-users",
        element: <UsersManager />,
      },
      {
        path: "/manage-categories",
        element: <CategoriesManager />,
      },
      {
        path: "/manage-medicines",
        element: <MedicinesManager />,
      },
      {
        path: "/manage-requests",
        element: <RequestsManager />,
      },
      {
        path: "/medicines-list",
        element: <MedicinesList />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
