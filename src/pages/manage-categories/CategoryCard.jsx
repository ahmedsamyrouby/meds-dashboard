import { useState } from "react";
import { Card, Accordion, Button, useAccordionButton } from "react-bootstrap";
// import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { BASE_URL } from './../../App';
import {
  RiDeleteBin6Fill,
  RiEdit2Fill,
  RiArrowDropDownFill,
  RiArrowDropUpFill,
} from "react-icons/ri";
import axios from "axios";

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


const CategoryCard = ({ catName, catDesc, catId, handleDelete }) => {


  return (
    <Card className="mb-3">
      <Card.Header className="d-flex align-items-center">
        <p className="d-inline my-0 me-auto fs-5 align-self-center">
          {catName}
        </p>
        <Button variant="danger" className=" py-2 px-2 me-3" onClick={() => handleDelete(catId)}>
          <RiDeleteBin6Fill size="1.5rem" />
        </Button>
        <Button variant="secondary" className=" py-2 px-2 me-3">
          <RiEdit2Fill color="white" size="1.5rem" />
        </Button>
        <CustomToggle className="me-3" eventKey={catId}>
          {/*show details button*/}
        </CustomToggle>
      </Card.Header>
      <Accordion.Collapse eventKey={catId}>
        <Card.Body>
          <span className="fw-bold">Category Description: </span>
          <p>
            {catDesc}
          </p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default CategoryCard;
