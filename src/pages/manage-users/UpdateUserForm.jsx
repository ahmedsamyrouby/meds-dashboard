import { Container, Form, Dropdown, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
// import axios from "axios";
// import { BASE_URL } from "../../App";
// import { useEffect, useState } from "react";
// import { getAuthUser } from "../../helper/storage";

const UpdateUserForm = () => {
  return (
    <Container className="rounded-4 request-manager-container p-4 bg-dark m-5 d-flex flex-column">
      <Link to="/manage-users">
        <BiArrowBack
          className="text-light bg-warning p-1 rounded-1"
          size="2rem"
        />
      </Link>
      <header className="m-4">
        <h1>Update User</h1>
      </header>

      <Form
        className="d-flex flex-column align-items-center"
        style={{ padding: "2rem 10rem" }}
      >
        <div className="d-flex w-100">
          <Form.Group className="w-75 mb-4 me-3">
            <Form.Label className="text-light">
              Enter Email Address:{" "}
            </Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="w-25 mb-4 me-3">
            <Form.Label className="text-light">Enter User ID: </Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group className="w-25 mb-4">
          <Form.Label className="text-light">Role: </Form.Label>
          <Dropdown>
            <Dropdown.Toggle className="w-100" variant="secondary" id="dropdown-basic">
              Choose Role
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Admin</Dropdown.Item>
              <Dropdown.Item>Patient</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
        </div>
        <div className="d-flex w-100">
          <Form.Group className="w-50 mb-4 me-2">
            <Form.Label className="text-light">Enter User's Name: </Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group className="w-50 mb-4 ms-2">
            <Form.Label className="text-light">Enter Phone Number: </Form.Label>
            <Form.Control type="tel" pattern="[0-9]{3} [0-9]{2} [0-9]{4}" />
          </Form.Group>
        </div>
        <Button type="submit">Update User</Button>
      </Form>
    </Container>
  );
};

export default UpdateUserForm;
