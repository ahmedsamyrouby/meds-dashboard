import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import App from "./App.js";
import CategoriesManager from "./pages/manage-categories/CategoriesManager";
import RequestsManager from "./pages/manage-requests/RequestsManager.jsx";
import MedicinesManager from "./pages/manage-medicines/MedicinesManager.jsx";
import NotFound from "./shared/NotFound.jsx";
import UsersManager from "./pages/manage-users/UsersManager.jsx";
import AddUserForm from "./pages/manage-users/AddUserForm.jsx";
import UpdateUserForm from "./pages/manage-users/UpdateUserForm.jsx";
import MedicinesList from "./pages/medicines-list/MedicinesList.jsx";
import Admin from "./middleware/Admin.jsx";
import User from "./middleware/User.jsx";
import Guest from "./middleware/Guest.jsx";
import AddCategoriesForm from "./pages/manage-categories/AddCategoriesForm.jsx";
import UpdateCategoryForm from "./pages/manage-categories/UpdateCategoryForm.jsx";
import AddMedicineForm from "./pages/manage-medicines/AddMedicineForm.jsx";
import UpdateMedicineForm from "./pages/manage-medicines/UpdateMedicineFrom.jsx";
import MedicinePage from "./pages/medicines-list/MedicinePage.jsx";
import UserReqHistory from "./pages/user-request-history/UserReqHistory.jsx";
import RequestMedForm from "./pages/request-medicines/RequestMedForm.jsx";

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
            path: "/manage-users/add",
            element: <AddUserForm />,
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
            element: <AddCategoriesForm />,
          },
          {
            path: "/manage-categories/:id",
            element: <UpdateCategoryForm />,
          },
          {
            path: "/manage-medicines/add",
            element: <AddMedicineForm />,
          },
          {
            path: "/manage-medicines/:id",
            element: <UpdateMedicineForm />,
          },
          {
            path: "/manage-users/:id",
            element: <UpdateUserForm />,
          },
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
          {
            path: "/medicines-list/:id",
            element: <MedicinePage />,
          },
          {
            path: "/request-history",
            element: <UserReqHistory />,
          },
          {
            path: "/request-medicines",
            element: <RequestMedForm />,
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
