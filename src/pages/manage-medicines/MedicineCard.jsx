import {
  Accordion,
  Button,
  Card,
  useAccordionButton,
  Badge,
} from "react-bootstrap";
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";

import { MdInfo } from "react-icons/md";

import { useState } from "react";
import { Link } from "react-router-dom";

const MedicineCard = ({ MedId }) => {
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

  return (
    <Card className="mb-3">
      <Card.Header className="d-flex align-items-center">
        <p className="d-inline my-0 me-auto fs-5 align-self-center">
          Medicine Name
        </p>
        <Button variant="danger" className=" py-2 px-2 me-3">
          <RiDeleteBin6Fill size="1.5rem" />
        </Button>
        <Link to={""+MedId} className="btn btn-secondary py-2 px-2 me-3">
          <RiEdit2Fill color="white" size="1.5rem" />
        </Link>
        <CustomToggle className="me-3" eventKey={MedId}>
          {/*show details button*/}
        </CustomToggle>
      </Card.Header>
      <Accordion.Collapse eventKey={MedId}>
        <Card.Body>
          {/* DESCRIPTION */}
          <div className="mb-2">
            <span className="fw-bold">Medicine Description: </span>
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* EXPIRATION DATE */}
          <div className="mb-2">
            <span className="fw-bold">Expiration Date: </span>
            <span>20/12/2015</span>
          </div>

          {/* CATEGORY */}
          <div className="mb-2">
            <span className="fw-bold">Category: </span>
            <Badge>#category</Badge>
          </div>

          {/* PRICE */}
          <div className="mb-2">
            <span className="fw-bold">Price: </span>
            <span className="fw-semibold opacity-75">EGP69</span>
          </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default MedicineCard;
