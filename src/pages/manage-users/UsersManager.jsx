import { Container, Accordion } from "react-bootstrap";
import UserCard from "./UserCard";

const UsersManager = () => {
  return (
    <Container className="rounded-4 request-manager-container p-4 bg-dark m-5 d-flex flex-column">
      <header className="m-4">
        <h1>Manage Users</h1>
      </header>
      <Accordion>
        <UserCard userId = {1} />
      </Accordion>
    </Container>
  );
};

export default UsersManager;
