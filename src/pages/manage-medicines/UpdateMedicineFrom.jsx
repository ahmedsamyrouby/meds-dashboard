import { Container, Form, Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const UpdateMedicineForm = () => {
  return (
    <Container className="rounded-4 request-manager-container p-4 bg-dark m-5 d-flex flex-column">
      <Link to="/manage-medicines">
        <BiArrowBack
          className="text-light bg-warning p-1 rounded-1"
          size="2rem"
        />
      </Link>

      <header className="m-4">
        <h1>Update Medicine</h1>
      </header>

      <Form
        className="d-flex flex-column align-items-center"
        style={{ padding: "2rem 10rem" }}
      >
        {/* MEDICINE NAME */}
        <Form.Group className="w-100 mb-4">
          <Form.Label className="text-light">Enter Medicine Name:</Form.Label>
          <Form.Control placeholder="Medicine Name" />
        </Form.Group>
        {/* MEDICINE DESCRIPTION */}
        <Form.Group className="w-100 mb-4">
          <Form.Label className="text-light">
            Enter Medicine Description:
          </Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Medicine Description"
            style={{ height: "200px", resize: "none" }}
          />
        </Form.Group>

        <div className=" w-100 d-flex justify-content-between">
          {/* MEDICINE CATEGORY */}
          <Form.Group className="w-50 me-5 mb-4">
            <Form.Label className="text-light">Category: </Form.Label>
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                drop="down"
                className="w-100"
              >
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu className="w-100 mb-4">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
          {/* MEDICINE EXPIRATION DATE */}
          <Form.Group className="w-50 me-5 mb-4">
            <Form.Label className="text-light">Expiration Date:</Form.Label>
            <Form.Control type="date" placeholder="Expiration Date" />
          </Form.Group>
          {/* MEDICINE PRICE */}
          <Form.Group className="w-25 ">
            <Form.Label className="text-light">Price:</Form.Label>
            <Form.Control type="number" placeholder="Medicine Price" />
          </Form.Group>
        </div>
      <Button type="submit">Update Medicine</Button>
      </Form>

    </Container>
  );
}

export default UpdateMedicineForm;