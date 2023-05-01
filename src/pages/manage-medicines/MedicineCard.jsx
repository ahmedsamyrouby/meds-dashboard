import { Accordion, Button, Card, useAccordionButton } from "react-bootstrap";
import {
  RiDeleteBin6Fill,
  RiEdit2Fill,
  RiArrowDropDownFill,
  RiArrowDropUpFill,
} from "react-icons/ri";

import { useState } from "react";


const MedicineCard = ({MedId}) => {

  const CustomToggle = ({ eventKey }) => {
    const [clicked, setClicked] = useState(false);
  
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      setClicked(!clicked)
    );
  
    return (
      <Button key={eventKey} variant="info" className="py-2" onClick={decoratedOnClick}>
        {clicked
          ? ["Hide Details", <RiArrowDropUpFill key={eventKey} size={"1.5rem"} />]
          : ["Show Details", <RiArrowDropDownFill key={eventKey} size={"1.5rem"} />]}
      </Button>
    );
  };

  return (
    <Card className="mb-3">
      <Card.Header className="d-flex align-items-center">
        <p className="d-inline my-0 me-auto fs-5 align-self-center">
          Category Name
        </p>
        <Button variant="danger" className=" py-2 px-2 me-3">
          <RiDeleteBin6Fill size="1.5rem" />
        </Button>
        <Button variant="secondary" className=" py-2 px-2 me-3">
          <RiEdit2Fill color="white" size="1.5rem" />
        </Button>
        <CustomToggle className="me-3" eventKey={MedId}>
          {/*show details button*/}
        </CustomToggle>
      </Card.Header>
      <Accordion.Collapse eventKey={MedId}>
        <Card.Body>
          <span className="fw-bold">Category Description: </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default MedicineCard;
