import { Accordion, Container, Button } from "react-bootstrap";
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
    axios.get(BASE_URL + "/med").then(res =>{
      setMeds({
        loading: false,
        medsData: res.data,
        err: null
      })
    }).catch(e => {
      setMeds({
        ...meds, loading: false, err: e.msg
      })
    })
  }

  useEffect(()=>{
    getMeds();
  }, [])

  return (
    <Container className="rounded-4 request-manager-container p-4 bg-dark m-5 d-flex flex-column">
      <header className="m-4">
        <h1>Manage Medicines</h1>
      </header>
      <Button className="m-auto btn-lg fw-semibold" variant="outline-warning">
        <Link to="add" className="text-light text-decoration-none">
          Add Medicine
        </Link>
      </Button>
      <Accordion className="p-3">
        {
          meds.medsData.map(med => {
            return (
              <MedicineCard 
              key={med.id_med}
              expDate = {med.Expiration_date}
              medName = {med.Name_meds}
              medDesc = {med.description_meds}
              medId = {med.id_med}
              medCat = {med.namefcategory}
              medPrice = {med.price}
              />
            )
          }) 
        }
      </Accordion>
    </Container>
  );
};

export default ManageMedicines;
