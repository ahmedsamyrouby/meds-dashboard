import { Card, Badge, Button } from "react-bootstrap";

const MedicineCard = () => {
  return (
    <div>
      <Card style={{ width: "20rem" }} className="m-3">
        <Card.Body>
          <Card.Title>Medicine Name</Card.Title>
          <Badge pill bg="info">
            #Category
          </Badge>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted fs-5">EGP 69</Card.Subtitle>
          <Button className="me-3">Request</Button>
          <Card.Link className="btn btn-dark" href="#">
            More Details...
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MedicineCard;
