import MedicineCard from "./MedicineCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Spinner, Alert, Form, Button } from "react-bootstrap";
import { BASE_URL } from "../../App";

const MedicinesList = () => {
  const [medicines, setMedicines] = useState({
    loading: true,
    medData: [],
    err: null,
    reload: 0,
  });

  const getMedicines = () => {
    setMedicines({ ...medicines, loading: true });
    axios
      .get(BASE_URL + "/fil")
      .then((res) => {
        setMedicines({
          ...medicines,
          loading: false,
          medData: res.data,
          err: null,
        });
      })
      .catch((e) => {
        setMedicines({ ...medicines, loading: false, err: e.message });
      });
  };

  useEffect(() => {
    getMedicines();
  }, []);

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

      <Form>
        <Form.Group className="mb-3 d-flex justify-content-center" controlId="formBasicEmail">
          <Form.Control className="w-50 me-3" type="email" placeholder="Search..." />
          <Button variant="outline-light">Search</Button>
        </Form.Group>

      </Form>

      {(!medicines.loading && !medicines.err && (
        <div className=" p-2 d-flex flex-wrap justify-content-evenly">
          {medicines.medData.map((med) => {
            return (
              <MedicineCard
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
      )) || (
        <Alert className="text-center" variant="danger">
          {medicines.err}
        </Alert>
      )}
    </Container>
  );
};

export default MedicinesList;
