import axios from "axios";
import { Badge, Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../App";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { getAuthUser } from "../../helper/storage";

let counter = 200;

const MedicinePage = () => {
  const { id } = useParams();

  const auth = getAuthUser();

  const [medData, setMedData] = useState({
    medName: "",
    medId: "",
    medDesc: "",
    medExpDate: "",
    medCategory: "",
  });

  const getMedInfo = () => {
    axios.get(BASE_URL + "/fil/" + id).then((res) => {
      setMedData({
        medName: res.data[0].Name_meds,
        medId: res.data[0].id_med,
        medDesc: res.data[0].description_meds,
        medExpDate: res.data[0].Expiration_date.slice(0, 10),
        medCategory: res.data[0].namefcategory,
        medPrice: res.data[0].price ? res.data[0].price : 0,
      });
    });
  };

  useEffect(() => {
    getMedInfo();
  }, []);


  const requestMed = () => {
    counter += 1;
    axios
      .post(BASE_URL + "/request", {
        idfreq: counter,
        nameofuser: auth.name_user,
        namenewca: medData.medCategory,
        namenewmeds: medData.medName,
      })
      .then((res) => {
        console.log(res.data.msg);
      }).catch(e => {
        console.log(e)
      });
  };

  return (
    <Container className="rounded-4 p-4 bg-dark m-5 d-flex flex-column">
      <Link to="/medicines-list">
        <BiArrowBack
          className="text-light bg-warning p-1 rounded-1"
          size="2rem"
        />
      </Link>
      <header className="m-4">
        <h1>{medData.medName}</h1>
      </header>

      <Container className="rounded-4 bg-light p-4">
        <div className="mb-2">
          <h4 className="text-dark">Description</h4>
          <p className="m-0">{medData.medDesc}</p>
        </div>
        <hr />
        <div className="mb-2">
          <span className="fw-semibold">Expiration Date: </span>
          <span>{medData.medExpDate}</span>
        </div>
        <div className="mb-2">
          <span className="fw-semibold">Medicine ID: </span>
          <span>{medData.medId}</span>
        </div>
        <div className="mb-2">
          <span className="fw-semibold">Category: </span>
          <Badge bg="info">#{medData.medCategory}</Badge>
        </div>
        <div className="mb-2">
          <span className="fw-semibold">Medicine Price: </span>
          <span className="fw-semibold opacity-75">EGP{medData.medPrice}</span>
        </div>
        <div className="w-100 text-center">
          <Button onClick={requestMed}>Request</Button>
        </div>
      </Container>
    </Container>
  );
};

export default MedicinePage;
