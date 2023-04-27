import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import App from "./App.js";
import CategoriesManager from "./pages/manage-categories/CategoriesManager";
import RequestsManager from "./pages/manage-requests/RequestsManager.jsx";
import MedicinesManager from "./components/manage-medicines/MedicinesManager";
import NotFound from "./shared/NotFound.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/manage-users",
        element: <h1>UsersManager</h1>,
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
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
