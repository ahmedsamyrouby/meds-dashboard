import { Card, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAuthUser } from "../../helper/storage";
import axios from "axios";
import { BASE_URL } from "../../App";

let counter = 300;

const MedicineListCard = ({ medName, medDesc, medPrice, medCat, medId }) => {
  const auth = getAuthUser();

  const requestMed = () => {
    counter += 1;
    axios
      .post(BASE_URL + "/request", {
        idfreq: counter,
        nameofuser: auth.name_user,
        namenewca: medCat,
        namenewmeds: medName,
      })
      .then((res) => {
        console.log(res.data.msg);
      });
  };

  return (
    <div>
      <Card style={{ width: "23rem" }} className="m-3">
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
