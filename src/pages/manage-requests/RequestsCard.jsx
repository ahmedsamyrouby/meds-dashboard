import axios from "axios";
import { useState } from "react";
import { Button, Accordion, Alert } from "react-bootstrap";
import { BASE_URL } from "../../App";
import { getAuthUser } from "../../helper/storage";

const RequestCard = ({ reqId, userName, catName, medName, reqStatus }) => {
  const auth = getAuthUser();

  const [status, setStatus] = useState(reqStatus);

  const handleAccept = () => {
    setStatus("accept");

    axios.put(BASE_URL + "/respo/" + reqId, {
      statut_req: "accept",
    });
  };

  const handleDecline = () => {
    setStatus("decline");

    axios.put(BASE_URL + "/respo/" + reqId, {
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
          {!status && auth.type === 1 ? (
            <div>
              <Button
                onClick={handleAccept}
                value="accept"
                className="btn btn-success me-2 my-2"
              >
                Accept
              </Button>
              <Button
                onClick={handleDecline}
                value="decline"
                className="btn btn-danger me-2 my-2"
              >
                Decline
              </Button>
            </div>
          ) : !status && auth.type === 0 ? (
            <Alert className="my-3" variant="secondary">
              Request Not Answered Yet
            </Alert>
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
