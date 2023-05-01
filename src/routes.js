import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import App from "./App.js";
import CategoriesManager from "./pages/manage-categories/CategoriesManager";
import RequestsManager from "./pages/manage-requests/RequestsManager.jsx";
import MedicinesManager from "./pages/manage-medicines/MedicinesManager.jsx";
import NotFound from "./shared/NotFound.jsx";
import UsersManager from "./components/manage-users/UsersManager.jsx";
import MedicinesList from "./pages/medicines-list/MedicinesList.jsx";
import Admin from "./middleware/Admin.jsx";
import User from "./middleware/User.jsx";
import Guest from "./middleware/Guest.jsx";
import AddCategoriesForm from "./pages/manage-categories/AddCategoriesForm.jsx";
import UpdateCategoryForm from "./pages/manage-categories/UpdateCategoryForm.jsx";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      // PROTECT GUEST
      {
        element: <Guest />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
        ],
      },
      // PROTECT ADMIN
      {
        element: <Admin />,
        children: [
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
            path: "/manage-categories/add",
            element: <AddCategoriesForm/>
          },
          {
            path: "/manage-categories/:id",
            element: <UpdateCategoryForm/>
          }
        ],
      },
      // PROTECT USER
      {
        element: <User />,
        children: [
          {
            path: "/medicines-list",
            element: <MedicinesList />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
