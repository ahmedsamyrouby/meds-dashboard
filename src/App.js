import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//styles
import "./styles/App.css";

//components
import AdminDashboard from "./components/admin-dashboard/AdminDashboard";
import UsersManager from "./components/manage-users/UsersManager";
import CategoriesManager from "./components/manage-categories/CategoriesManager";
import MedicinesManager from "./components/manage-medicines/MedicinesManager";
import RequestsManager from "./components/manage-requests/RequestsManager";
import MedicinesForm from "./components/manage-medicines/MedicinesForm";

//layouts
import AdminDashboardLayout from "./layouts/AdminDashboardLayout";
import MedicinesManagerLayout from "./layouts/MedicinesManagerLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AdminDashboardLayout />}>
      <Route index element={<AdminDashboard />} />
      <Route path="manage-users" element={<UsersManager />} />
      <Route path="manage-categories" element={<CategoriesManager />} />
      <Route path="manage-medicines" element={<MedicinesManagerLayout />}>
        <Route path="view" element={<MedicinesManager />} >
          
        </ Route>
        <Route path="add" element={<MedicinesForm />} />
      </Route>
      <Route path="manage-requests" element={<RequestsManager />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
