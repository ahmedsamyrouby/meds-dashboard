import { Badge, Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MedicinePage = () => {
  return (
    <Container className="rounded-4 p-4 bg-dark m-5 d-flex flex-column">
      <header className="m-4">
        <h1>Novolin R ReliOn</h1>
      </header>

      <Container className="rounded-4 bg-light p-4">
        <div className="mb-2">
          <h4 className="text-dark">Description</h4>
          <p className="m-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia est
            iusto cupiditate impedit facilis commodi tempora dolorem aliquam
            tempore earum quae, nobis iure at eaque exercitationem nisi?
            Dolores, illum temporibus?
          </p>
        </div>
        <div className="mb-2">
          <span className="fw-semibold">Expiration Date: </span>
          <span>2026-12-31</span>
        </div>
        <div className="mb-2">
          <span className="fw-semibold">Medicine ID: </span>
          <span>115</span>
        </div>
        <div className="mb-2">
          <span className="fw-semibold">Category: </span>
          <Badge bg="info">#headache</Badge>
        </div>
        <div className="mb-2">
          <span className="fw-semibold">Medicine Price: </span>
          <span className="fw-semibold opacity-75">EGP69</span>
        </div>
        <div className="w-100 text-center">
          <Button >Request</Button>
        </div>
      </Container>
    </Container>
  );
};

export default MedicinePage;
