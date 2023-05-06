import { Container, Accordion, Spinner, Alert } from "react-bootstrap";
import { getAuthUser } from "../../helper/storage";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../App";
import RequestsCard from "../manage-requests/RequestsCard";

const UserReqHistory = () => {
  const auth = getAuthUser();

  const [medRequests, setMedRequests] = useState({
    loading: true,
    reqData: [],
    err: null,
    reload: 0,
  });

  const getMedRequests = () => {
    setMedRequests({ ...medRequests, loading: true });
    axios
      .get(BASE_URL + "/hisreq/" + auth.name_user)
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

  console.log(medRequests.reqData);

  return (
    <Container className="rounded-4 request-manager-container p-4 bg-dark m-5 d-flex flex-column">
      {medRequests.loading && (
        <div className="text-center">
          <Spinner animation="border" role="status" variant="light">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}

      <header className="m-4">
        <h1>Requests History</h1>
      </header>

      {(!medRequests.loading && !medRequests.err && (
        <Accordion>
          {medRequests.reqData.map((req) => {
            return (
              <RequestsCard
                key={req.idfreq}
                reqId={req.idfreq}
                userName={""}
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

export default UserReqHistory;
