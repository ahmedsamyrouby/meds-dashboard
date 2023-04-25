import { Container, Accordion, Spinner } from "react-bootstrap";
import RequestsCard from "./RequestsCard";
import "./styles/RequestsManager.css";
import { useEffect, useState } from "react";
import axios from "axios";

const RequestsManager = () => {
  const [requests, setRequests] = useState({
    loading: true,
    reqData: [],
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setRequests({ ...requests, loading: true });
    axios
      .get("http://localhost:3001/request")
      .then((res) => {
        setRequests({
          ...requests,
          loading: false,
          reqData: res.data,
          err: null,
        });
      })
      .catch((e) => {
        setRequests({ ...requests, loading: false, err: e });
        console.log(e);
      });
  }, []);

  return (
    <Container className="request-manager-container p-4 bg-dark m-5">
      {requests.loading && (
        <div className="text-center">
          <Spinner animation="border" role="status" variant="light">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      <header className="request-manager-header p-4">
        <h1>Manage Requests</h1>
      </header>
      {!requests.loading && (
        <Accordion>
          {requests.reqData.map((req) => {
            return(
              <RequestsCard
                reqId={req.idfreq}
                userName={req.nameofuser}
                catName={req.namenewca}
                medName={req.namenewmeds}
                reqStatus={req.statut_req}
              />
            )
          })}
        </Accordion>
      )}
    </Container>
  );
};

export default RequestsManager;
