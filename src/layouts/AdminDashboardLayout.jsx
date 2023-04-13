import { NavLink, Outlet } from "react-router-dom";
import {RiArrowDownSFill} from 'react-icons/ri'
//styles
import "../styles/admin-dashboard-layout-style/AdminNavbar.css";
import "../styles/admin-dashboard-layout-style/AdminLayout.css";

const AdminDashboardLayout = () => {
  return (
    <div className="admin-dashboard-layout">
      <header>
        <nav className="admin-nav">
          <NavLink to="/">
            <div className="nav-logo">Meds</div>
          </NavLink>

          <div className="nav-links">
            <div className="nav-link">
              <NavLink to="/">Home</NavLink>
            </div>
            <div className="nav-link">
              <NavLink to="manage-users">Users</NavLink>
            </div>
            <div className="nav-link">
              <NavLink to="manage-categories">Categories</NavLink>
            </div>
            <div className="nav-link">
              <NavLink to="manage-medicines/view">Medicines</NavLink>
            </div>
            <div className="nav-link">
              <NavLink to="manage-requests">Requests</NavLink>
            </div>
          </div>

          <div className="user-controls">Admin' Name <RiArrowDownSFill /></div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboardLayout;
