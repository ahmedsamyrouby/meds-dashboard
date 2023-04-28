import { Navigate, Outlet } from "react-router-dom";
import { getAuthUser } from "../helper/storage";

const Guest = () => {
  const auth = getAuthUser();
  return (
    <>
      {auth && auth.type === 1 ? (
        <Navigate to="/manage-users" />
      ) : auth && auth.type === 0 ? (
        <Navigate to="/medicines-list" />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Guest;
