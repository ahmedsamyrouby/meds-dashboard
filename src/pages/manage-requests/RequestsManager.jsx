import { Container, Accordion, Spinner, Alert } from "react-bootstrap";
import RequestsCard from "./RequestsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../App";

const RequestsManager = () => {
  const [medRequests, setMedRequests] = useState({
    loading: true,
    reqData: [],
    err: null,
    reload: 0,
  });

  const getMedRequests = () => {
    setMedRequests({ ...medRequests, loading: true });
    axios
      .get(BASE_URL + "/request")
      .then((res) => {
        if (medRequests) {
          setMedRequests({
            ...medRequests,
            loading: false,
            reqData: res.data,
            err: null,
          });
        }
      })
      .catch((e) => {
        setMedRequests({ ...medRequests, loading: false, err: e.message });
      });
  };

  useEffect(() => {
    getMedRequests();
  }, []);

  return (
    <Container className="rounded-4 request-manager-container p-4 bg-dark m-5">
      {medRequests.loading && (
        <div className="text-center">
          <Spinner animation="border" role="status" variant="light">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      <header className="request-manager-header m-4">
        <h1>Manage Requests</h1>
      </header>
      {(!medRequests.loading && !medRequests.err && (
        <Accordion>
          {medRequests.reqData.slice().reverse().map((req) => {
            return (
              <RequestsCard
                key={req.idfreq}
                reqId={req.idfreq}
                userName={req.nameofuser}
                catName={req.namenewca}
                medName={req.namenewmeds}
                reqStatus={req.statut_req}
              />
            );
          })}
        </Accordion>
      )) || (
        <Alert className="text-center" variant="danger">
          {medRequests.err}
        </Alert>
      )}
    </Container>
  );
};

export default RequestsManager;
