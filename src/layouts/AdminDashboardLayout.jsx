//styles
import "../styles/admin-dashboard-layout-style/AdminNavbar.css";
import "../styles/admin-dashboard-layout-style/AdminLayout.css";

const AdminDashboardLayout = () => {
  return (
    <div className="admin-dashboard-layout">


      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboardLayout;
