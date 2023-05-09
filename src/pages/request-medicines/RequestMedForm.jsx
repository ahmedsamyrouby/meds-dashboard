import { Container, Form, Button, Alert } from "react-bootstrap";
import { getAuthUser } from "../../helper/storage";
import { useState } from "react";
import { BASE_URL } from "../../App";
import axios from "axios";

const RequestMedForm = () => {
  const [reqDetails, setReqDetails] = useState({
    medName: "",
    medCat: "",
    resMsg: "",
  });

  const auth = getAuthUser();

  const sendRequest = (e) => {
    e.preventDefault();
    axios
      .post(BASE_URL + "/request", {
        nameofuser: auth.name_user,
        namenewca: reqDetails.medCat,
        namenewmeds: reqDetails.medName,
      })
      .then((res) => {
        setReqDetails({ ...reqDetails, resMsg: res.data.msg });
        setTimeout(() => {
          setReqDetails({
            ...reqDetails,
            medName: "",
            medCat: "",
            resMsg: "",
          });
          e.target.reset();
        }, 3000)
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Container className="rounded-4 p-4 bg-dark m-5 d-flex flex-column w-50">
      <header className="m-4">
        <h1>Request Medicine</h1>
      </header>

      <Form onSubmit={sendRequest}>
        {reqDetails.resMsg && (
          <Alert variant="success" className="w-100 text-center">
            {reqDetails.resMsg}
          </Alert>
        )}
        <div className="d-flex w-100">
          <Form.Group className="mb-4 me-2 w-50">
            <Form.Label className="text-light">Medicine Name:</Form.Label>
            <Form.Control
              placeholder="Medicine Name"
              value={reqDetails.medName}
              onChange={(e) => {
                setReqDetails({ ...reqDetails, medName: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-4 ms-2 w-50">
            <Form.Label className="text-light">Medicine Category:</Form.Label>
            <Form.Control
              placeholder="Medicine Category"
              value={reqDetails.medCat}
              onChange={(e) => {
                setReqDetails({ ...reqDetails, medCat: e.target.value });
              }}
            />
          </Form.Group>
        </div>
        <div className="text-center">
          <Button type="submit">Send Request</Button>
        </div>
      </Form>
    </Container>
  );
};

export default RequestMedForm;
