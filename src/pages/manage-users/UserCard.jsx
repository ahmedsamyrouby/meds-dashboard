import { useState } from "react";
import { Card, Accordion, Button, useAccordionButton, Badge } from "react-bootstrap";
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";
import { MdInfo } from "react-icons/md";
import { Link } from "react-router-dom";

const CustomToggle = ({ eventKey }) => {
  const [clicked, setClicked] = useState(false);

  const decoratedOnClick = useAccordionButton(eventKey, () =>
    setClicked(!clicked)
  );

  return (
    <Button
      key={eventKey}
      variant="info"
      className="py-2"
      onClick={decoratedOnClick}
    >
      <MdInfo color="white" size="1.5rem" />
    </Button>
  );
};

const UserCard = ({ userId }) => {
  return (
    <Card className="mb-3">
      <Card.Header className="d-flex align-items-center">
        <p className="d-inline my-0 me-auto fs-5 align-self-center">
          User Name
        </p>
        <Button variant="danger" className=" py-2 px-2 me-3">
          <RiDeleteBin6Fill size="1.5rem" />
        </Button>
        <Link to={"" + userId} className="btn btn-secondary py-2 px-2 me-3">
          <RiEdit2Fill color="white" size="1.5rem" />
        </Link>
        <CustomToggle className="me-3" eventKey={userId}></CustomToggle>
      </Card.Header>
      <Accordion.Collapse eventKey={userId}>
        <Card.Body>
          <div className="mb-1">
            <span className="fw-bold">User ID: </span>
            <span>567</span>
          </div>
          <div className="mb-1">
            <span className="fw-bold">Email Address: </span>
            <span>admin@gmail.com</span>
          </div>
          <div className="mb-1">
            <span className="fw-bold">Phone Number: </span>
            <span>36783456789</span>
          </div>
          <div className="mb-1">
            <span className="fw-bold">Role: </span>
            <Badge>ADMIN</Badge>
          </div>
          <div className="mb-1">
            <span className="fw-bold">Role: </span>
            <Badge bg="dark">PATIENT</Badge>
          </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default UserCard;
