import { Container, Accordion, Button, Alert, Spinner } from "react-bootstrap";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./../../App";

const UsersManager = () => {
  const [users, setUsers] = useState({
    loading: true,
    usersData: [],
    err: null,
    reload: 0,
  });

  const getUsers = () => {
    axios
      .get(BASE_URL + "/user")
      .then((res) => {
        setUsers({
          loading: false,
          usersData: res.data,
          err: null,
        });
      })
      .catch((e) => {
        setUsers({
          ...users,
          loading: false,
          err: e.message,
        });
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container className="rounded-4 request-manager-container p-4 bg-dark m-5 d-flex flex-column">
      {users.loading && (
        <div className="text-center">
          <Spinner animation="border" role="status" variant="light">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      <header className="m-4">
        <h1>Manage Users</h1>
      </header>
      {(!users.loading && !users.err && (
        <>
          <Button
            className="m-auto btn-lg fw-semibold"
            variant="outline-warning"
          >
            <Link to="add" className="text-light text-decoration-none">
              Add User
            </Link>
          </Button>
          <Accordion className="p-3">
            {users.usersData.map((user) => {
              return(<UserCard
                key={user.id_user}
                userId={user.id_user}
                userName={user.name_user}
                userEmail={user.email}
                userPhoneNum={user.phone_user}
                userRole={user.type}
              />);
            })}
          </Accordion>
        </>
      )) || (
        <Alert className="text-center" variant="danger">
          {/* {users.err} */}
        </Alert>
      )}
    </Container>
  );
};

export default UsersManager;
