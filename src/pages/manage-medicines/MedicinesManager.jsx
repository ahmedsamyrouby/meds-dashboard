import { Accordion, Container, Button, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import MedicineCard from "./MedicineCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../App";

const ManageMedicines = () => {
  const [meds, setMeds] = useState({
    loading: true,
    medsData: [],
    err: null,
  });

  const getMeds = () => {
    axios
      .get(BASE_URL + "/med")
      .then((res) => {
        setMeds({
          loading: false,
          medsData: res.data,
          err: null,
        });
      })
      .catch((e) => {
        setMeds({
          ...meds,
          loading: false,
          err: e.message,
        });
      });
  };

  useEffect(() => {
    getMeds();
  }, []);

  return (
    <Container className="rounded-4 request-manager-container p-4 bg-dark m-5 d-flex flex-column">
      {meds.loading && (
        <div className="text-center">
          <Spinner animation="border" role="status" variant="light">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      <header className="m-4">
        <h1>Manage Medicines</h1>
      </header>
      {(!meds.loading && !meds.err && (
        <>
          <Button
            className="m-auto btn-lg fw-semibold"
            variant="outline-warning"
          >
            <Link to="add" className="text-light text-decoration-none">
              Add Medicine
            </Link>
          </Button>
          <Accordion className="p-3">
            {meds.medsData.map((med) => {
              return (
                <MedicineCard
                  key={med.id_med}
                  expDate={med.Expiration_date}
                  medName={med.Name_meds}
                  medDesc={med.description_meds}
                  medId={med.id_med}
                  medCat={med.namefcategory}
                  medPrice={med.price}
                />
              );
            })}
          </Accordion>
        </>
      )) || (
        <Alert className="text-center" variant="danger">
          {meds.err}
        </Alert>
      )}
    </Container>
  );
};

export default ManageMedicines;
