import { Card, Accordion, Button, useAccordionButton } from "react-bootstrap";
// import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";

const CustomToggle = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <Button variant="warning" className="py-2" onClick={decoratedOnClick}>
      {children}
    </Button>
  );
};

const CategoryCard = () => {
  return (
    <Card className="mb-3">
      <Card.Header className="d-flex align-items-center">
        <p className="d-inline my-0 me-auto fs-5 align-self-center">
          Category Name
        </p>
        <Button className="btn btn-danger py-2 px-2 me-3">
          <RiDeleteBin6Fill size="1.5rem" />
        </Button>
        <Button className="btn btn-info py-2 px-2 me-3">
          <RiEdit2Fill color="white" size="1.5rem" />
        </Button>
        <CustomToggle className="me-3" eventKey="0">
          Show Details
        </CustomToggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
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

export default CategoryCard;

{
  /* <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            <span className="fw-bold">Category Description: </span>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            </p>
            <Button className="btn btn-danger py-1 px-2 me-3">
              <RiDeleteBin6Fill size="1.5rem" />
            </Button>
            <Button className="btn btn-info py-1 px-2 me-3">
              <RiEdit2Fill color="white" size="1.5rem" />
            </Button>
          </Accordion.Body>
        </Accordion.Item> */
}
