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

const MedicineCard = ({ medId, expDate, medName, medDesc, medCat, medPrice, handleDelete }) => {
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
          {medName}
        </p>
        <Button variant="danger" className=" py-2 px-2 me-3" onClick={() => {handleDelete(medId)}}>
          <RiDeleteBin6Fill size="1.5rem" />
        </Button>
        <Link to={""+medId} className="btn btn-secondary py-2 px-2 me-3">
          <RiEdit2Fill color="white" size="1.5rem" />
        </Link>
        <CustomToggle className="me-3" eventKey={medId}>
          {/*show details button*/}
        </CustomToggle>
      </Card.Header>
      <Accordion.Collapse eventKey={medId}>
        <Card.Body>
          {/* DESCRIPTION */}
          <div className="mb-2">
            <span className="fw-bold">Medicine Description: </span>
            <p className="m-0">
              {medDesc}
            </p>
          </div>

          {/* EXPIRATION DATE */}
          <div className="mb-2">
            <span className="fw-bold">Expiration Date: </span>
            <span>{expDate.slice(0, 10)}</span>
          </div>

          {/* CATEGORY */}
          <div className="mb-2">
            <span className="fw-bold">Category: </span>
            <Badge>#{medCat}</Badge>
          </div>

          {/* PRICE */}
          <div className="mb-2">
            <span className="fw-bold">Price: </span>
            <span className="fw-semibold opacity-75">EGP{medPrice ? medPrice : 0}</span>
          </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default MedicineCard;
