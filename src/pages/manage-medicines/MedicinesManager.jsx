import { Accordion } from "react-bootstrap";
import MedicineCard from "./MedicineCard"


const ManageMedicines = () => {
  return (<Accordion>
    <MedicineCard MedId = {1} />
  </Accordion>);
}

export default ManageMedicines;