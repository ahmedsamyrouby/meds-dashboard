import { Container, Accordion, Button, Alert } from "react-bootstrap";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";
import { useState } from "react";

const UsersManager = () => {
  const [users, setUsers] = useState({
    loading: false
  });

  return (
    <Container className="rounded-4 request-manager-container p-4 bg-dark m-5 d-flex flex-column">
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
            <UserCard userId={1} />
            <UserCard userId={2} />
            <UserCard userId={3} />
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
