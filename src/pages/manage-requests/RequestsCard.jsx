import { Button, Accordion, Alert } from "react-bootstrap";

const RequestCard = ({eventKey}) => {
  return (
      <Accordion.Item eventKey={eventKey} className="requests-list-item bg-light m-3">
        <Accordion.Header>
          Request Item
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
          <div>
          <Button className="btn btn-success me-2 my-2">Accept</Button>
          <Button className="btn btn-danger me-2 my-2">Decline</Button>
          {/* <Alert className = "my-3" variant="success">
            Request Accepted
          </Alert>
          <Alert className = "my-3" variant="danger">
            Request Denied
          </Alert> */}
          </div>
        </Accordion.Body>
      </Accordion.Item>
  );
};

export default RequestCard;
