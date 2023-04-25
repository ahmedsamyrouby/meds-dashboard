import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Accordion, Alert } from "react-bootstrap";

const RequestCard = ({ reqId, userName, catName, medName, reqStatus }) => {

  const [status, setStatus] = useState(reqStatus)

  const handleAccept = () => {

    setStatus("accept");

    axios.put("http://localhost:3001/respo/" + reqId, {
      statut_req: "accept",
    });
  };

  const handleDecline = () => {

    setStatus("decline");

    axios.put("http://localhost:3001/respo/" + reqId, {
      statut_req: "decline",
    });
  };


  return (
    <Accordion.Item
      eventKey={reqId}
      className="requests-list-item bg-light m-3"
    >
      <Accordion.Header>
        Request<span className="fw-bold">#{reqId}</span>: {userName}
      </Accordion.Header>
      <Accordion.Body>
        <p className="medicine-name">
          <span className="fw-bold">Medicine Name: </span>
          {medName}
        </p>
        <p className="medicine-category">
          <span className="fw-bold">Medicine Category: </span>
          {catName}
        </p>
        <div>
          {!status ? (
            <div>
              <Button onClick={handleAccept} value="accept" className="btn btn-success me-2 my-2">
                Accept
              </Button>
              <Button onClick={handleDecline} value="decline" className="btn btn-danger me-2 my-2">
                Decline
              </Button>
            </div>
          ) : status === "accept" ? (
            <Alert className="my-3" variant="success">
              Request Accepted
            </Alert>
          ) : (
            <Alert className="my-3" variant="danger">
              Request Denied
            </Alert>
          )}
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default RequestCard;
