import MedicineListCard from "./MedicineListCard";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Spinner,
  Alert,
  Form,
  Button,
  Nav,
} from "react-bootstrap";
import { BASE_URL } from "../../App";
import { getAuthUser } from "../../helper/storage";

const MedicinesList = () => {
  const auth = getAuthUser();

  const [medicines, setMedicines] = useState({
    loading: true,
    medData: [],
    err: null,
    reload: 0,
  });

  const [medCats, setMedCats] = useState({
    loading: true,
    catData: [],
    err: null,
  });

  const [searchMed, setSearchMed] = useState("");


  const getMedicines = () => {
    setMedicines({ ...medicines, loading: true });
    axios
      .get(BASE_URL + "/fil/" + auth.id_user, {
        params: {
          search: searchMed ,
        },
      })
      .then((res) => {
        setMedicines({
          ...medicines,
          loading: false,
          medData: res.data,
          err: null,
        });
      })
      .catch((e) => {
        setMedicines({ ...medicines, loading: false, err: e.response.data.ms });
      });
  };

  const getMedicinesByCat = (cat) => {
    setMedicines({ ...medicines, loading: true });
    axios
      .get(BASE_URL + "/fil/category/" + cat)
      .then((res) => {
        setMedicines({
          ...medicines,
          loading: false,
          medData: res.data,
          err: null,
        });
      })
      .catch((e) => {
        setMedicines({ ...medicines, loading: false, err: e.response.data.ms });
      });
  };

  const getMedCats = () => {
    axios
      .get(BASE_URL + "/cat")
      .then((res) => {
        setMedCats({
          ...medCats,
          loading: false,
          catData: res.data,
          err: null,
        });
      })
      .catch((e) => {
        setMedCats({ ...medCats, loading: false, err: e.message });
      });
  };

  useEffect(() => {
    getMedicines();
    getMedCats();
  }, [medicines.reload]);

  const searchMeds = (e) => {
    e.preventDefault();
    setMedicines({ ...medicines, reload: medicines.reload + 1 });
  };

  return (
    <Container className="d-flex flex-column bg-dark m-5 p-4 rounded-4">
      {medicines.loading && (
        <div className="text-center">
          <Spinner animation="border" role="status" variant="light">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      <header className="login-header m-4">
        <h1>Medicines List</h1>
      </header>

      <Form onSubmit={searchMeds}>
        <Form.Group
          className="mb-3 d-flex justify-content-center"
          controlId="formBasicEmail"
        >
          <Form.Control
            className="w-50 me-3"
            placeholder="Search..."
            value={searchMed}
            onChange={(e) => {
              setSearchMed(e.target.value);
            }}
          />
          <Button type="submit" variant="outline-light">
            Search
          </Button>
        </Form.Group>
      </Form>

      <Container className="filter-cat m-auto p-5 d-flex flex-start">
        <span className="text-light me-3 btn btn-dark p-2 disabled">
          Categories:{" "}
        </span>
        <Nav variant="pills" defaultActiveKey="-1">
          <Nav.Item className="m-1">
            <Nav.Link
              className="text-light"
              as={Button}
              eventKey="-1"
              onClick={() => getMedicines("")}
            >
              View All
            </Nav.Link>
          </Nav.Item>
          {medCats.catData.map((cat, i) => {
            return (
              <Nav.Item className="m-1" key={i}>
                <Nav.Link
                  className="text-light"
                  as={Button}
                  eventKey={i}
                  onClick={() => {
                    getMedicinesByCat(cat.Name_Category);
                  }}
                >
                  {cat.Name_Category}
                </Nav.Link>
              </Nav.Item>
            );
          })}
        </Nav>
      </Container>

      {(!medicines.loading && !medicines.err && (
        <div className=" p-2 d-flex flex-wrap justify-content-evenly">
          {medicines.medData.map((med) => {
            return (
              <MedicineListCard
                key={med.id_med}
                medName={med.Name_meds}
                medDesc={med.description_meds}
                medPrice={med.price}
                medCat={med.namefcategory}
                medId={med.id_med}
              />
            );
          })}
        </div>
      )) ||
        (medicines.err === "Empty!" ? (
          <Alert className="text-center" variant="secondary">
            {medicines.err}
          </Alert>
        ) : (
          <Alert className="text-center" variant="danger">
            {medicines.err}
          </Alert>
        ))}
    </Container>
  );
};

export default MedicinesList;
