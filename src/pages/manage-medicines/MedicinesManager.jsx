import { Accordion, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MedicineCard from "./MedicineCard";

const ManageMedicines = () => {
  return (
    <Container className="rounded-4 request-manager-container p-4 bg-dark m-5 d-flex flex-column">
      <header className="m-4">
        <h1>Manage Medicines</h1>
      </header>
      <Button className="m-auto btn-lg fw-semibold" variant="outline-warning">
        <Link to="add" className="text-light text-decoration-none">
          Add Medicine
        </Link>
      </Button>
      <Accordion className="p-3">
        <MedicineCard MedId={1} />
      </Accordion>
    </Container>
  );
};

export default ManageMedicines;
