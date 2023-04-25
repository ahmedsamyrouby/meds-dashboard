import { Container, Accordion } from "react-bootstrap";
import RequestsCard from "./RequestsCard";
import "./styles/RequestsManager.css";

const RequestsManager = () => {
  return (
    <Container className="request-manager-container p-4 bg-dark m-5">
      <header className="request-manager-header p-4">
        <h1>Manage Requests</h1>
      </header>
      <Accordion>
        <RequestsCard />
        <RequestsCard />
        <RequestsCard />
        <RequestsCard />
        <RequestsCard />
        <RequestsCard />
        <RequestsCard />
        <RequestsCard />
        <RequestsCard />
        <RequestsCard />
        <RequestsCard />
        <RequestsCard />
        <RequestsCard />
      </Accordion>
    </Container>
  );
};

export default RequestsManager;
