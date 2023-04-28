import { Navigate, Outlet } from "react-router-dom";
import { getAuthUser } from "../helper/storage";

const User = () => {
  const auth = getAuthUser();
  return (
    <>
      {auth && auth.type === 0 ? (
        <Outlet />
      ) : !auth ? (
        <Navigate to="login" />
      ) : (
        <Navigate to="manage-users" />
      )}
    </>
  );
};

export default User;
