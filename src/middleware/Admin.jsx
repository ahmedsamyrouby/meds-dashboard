import { Navigate, Outlet } from "react-router-dom";
import { getAuthUser } from "../helper/storage";

const Admin = () => {
  const auth = getAuthUser();
  return (
    <>
      {auth && auth.type === 1 ? (
        <Outlet />
      ) : !auth ? (
        <Navigate to="login" />
      ) : (
        <Navigate to="medicines-list" />
      )}
    </>
  );
};

export default Admin;
