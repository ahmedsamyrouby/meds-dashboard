import { Card, Badge, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAuthUser } from "../../helper/storage";
import axios from "axios";
import { BASE_URL } from "../../App";
import { useState } from "react";

const MedicineListCard = ({ medName, medDesc, medPrice, medCat, medId }) => {
  const auth = getAuthUser();
  const [msg, setMsg] = useState();

  const requestMed = () => {
    axios
      .post(BASE_URL + "/request", {
        nameofuser: auth.name_user,
        namenewca: medCat,
        namenewmeds: medName,
      })
      .then((res) => {
        setMsg(res.data.msg);
      }).catch(e => {
        setMsg(e.response.data.ms)
      });

      setTimeout(() => {
        setMsg("");
      }, 3000);
  };

  return (
    <div>
      <Card style={{ width: "23rem" }} className="m-3">
        {msg && (
          <div className="d-flex justify-content-end w-100 position-absolute">
            <Alert variant="success" className="w-50 text-center">
              {msg}
            </Alert>
          </div>
        )}
        <Card.Body>
          <Card.Title>{medName}</Card.Title>
          <Badge pill bg="info">
            #{medCat}
          </Badge>
          <Card.Text style={{ height: "6rem" }}>
            {medDesc.slice(0, 150)}...
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted fs-5">
            EGP{medPrice ? medPrice : 0}
          </Card.Subtitle>
          <Button className="me-3" onClick={requestMed}>
            Request
          </Button>
          <Link className="btn btn-dark" to={"" + medId}>
            More Details...
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MedicineListCard;
