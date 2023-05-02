import { Container, Form, Dropdown, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
// import axios from "axios";
// import { BASE_URL } from "../../App";
// import { useEffect, useState } from "react";
import { getAuthUser } from "../../helper/storage";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../App";

const AddUserForm = () => {
  const auth = getAuthUser();

  const [currentUser, setCurrentUser] = useState({
    userId: "",
    userName: "",
    userPhoneNum: "",
    userEmail: "",
    userPassword: "",
    checkUserPassword: "",
    userRole: 0,
    userStatus: 1,
    resMsg: null,
  });

  const checkPassMsg = "Please make sure that you passwords match";

  const addUser = (e) => {
    e.preventDefault();
    if (currentUser.userPassword !== currentUser.checkUserPassword) {
      setCurrentUser({
        ...currentUser,
        resMsg: checkPassMsg,
      });
      setTimeout(() => {
        setCurrentUser({
          ...currentUser,
          resMsg: null,
        });
      }, 5000);
    } else {
      axios
        .post(BASE_URL + "/user", {
          phone_user: currentUser.userPhoneNum,
          id_user: currentUser.userPhoneNum,
          name_user: currentUser.userName,
          email: currentUser.userEmail,
          password: currentUser.userPassword,
          type: currentUser.userRole,
          status: "1",
        })
        .then((res) => {
          setCurrentUser({ ...currentUser, resMsg: res.data.msg });
        });

      setTimeout(() => {
        setCurrentUser({
          userId: "",
          userName: "",
          userPhoneNum: "",
          userEmail: "",
          userPassword: "",
          checkUserPassword: "",
          userRole: 0,
          userStatus: 1,
          resMsg: null,
        });
        e.target.reset();
      }, 3000);
    }
  };

  return (
    <Container className="rounded-4 request-manager-container p-4 bg-dark m-5 d-flex flex-column">
      <Link to="/manage-users">
        <BiArrowBack
          className="text-light bg-warning p-1 rounded-1"
          size="2rem"
        />
      </Link>
      <header className="m-4">
        <h1>Add User</h1>
      </header>

      <Form
        className="d-flex flex-column align-items-center"
        style={{ padding: "2rem 10rem" }}
        onSubmit={addUser}
      >
        {currentUser.resMsg && (
          <Alert
            variant={currentUser.resMsg === checkPassMsg ? "danger" : "success"}
            className="w-100 text-center"
          >
            {currentUser.resMsg}
          </Alert>
        )}
        <div className="d-flex w-100">
          <Form.Group className="w-75 mb-4 me-3">
            <Form.Label className="text-light">Enter Email Address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email Address"
              value={currentUser.userEmail}
              onChange={(e) => {
                setCurrentUser({ ...currentUser, userEmail: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="w-25 mb-4 me-3">
            <Form.Label className="text-light">Enter User ID: </Form.Label>
            <Form.Control
              type="number"
              placeholder="User ID"
              value={currentUser.userId}
              onChange={(e) => {
                setCurrentUser({ ...currentUser, userId: e.target.value });
              }}
            />
          </Form.Group>

          <Form.Group className="w-25 mb-4">
            <Form.Label className="text-light">Role: </Form.Label>
            <Dropdown>
              <Dropdown.Toggle
                className="w-100"
                variant="secondary"
                id="dropdown-basic"
              >
                {currentUser.userRole ? "Admin" : "Patient"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    setCurrentUser({
                      ...currentUser,
                      userRole: 1,
                    });
                  }}
                >
                  Admin
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setCurrentUser({
                      ...currentUser,
                      userRole: 0,
                    });
                  }}
                >
                  Patient
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
        </div>
        <div className="d-flex w-100">
          <Form.Group className="w-50 mb-4 me-2">
            <Form.Label className="text-light">Enter User's Name: </Form.Label>
            <Form.Control
              placeholder="User's Name"
              value={currentUser.userName}
              onChange={(e) => {
                setCurrentUser({ ...currentUser, userName: e.target.value });
              }}
            />
          </Form.Group>

          <Form.Group className="w-50 mb-4 ms-2">
            <Form.Label className="text-light">Enter Phone Number: </Form.Label>
            <Form.Control
              type="tel"
              placeholder="Phone Number"
              value={currentUser.userPhoneNum}
              onChange={(e) => {
                setCurrentUser({
                  ...currentUser,
                  userPhoneNum: e.target.value,
                });
              }}
            />
          </Form.Group>
        </div>

        <div className="d-flex w-100">
          <Form.Group className="w-50 mb-4 me-2">
            <Form.Label className="text-light">Enter Password: </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={currentUser.userPassword}
              onChange={(e) => {
                setCurrentUser({
                  ...currentUser,
                  userPassword: e.target.value,
                });
              }}
            />
          </Form.Group>

          <Form.Group className="w-50 mb-4 ms-2">
            <Form.Label className="text-light">Confirm Password: </Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={currentUser.checkUserPassword}
              onChange={(e) => {
                setCurrentUser({
                  ...currentUser,
                  checkUserPassword: e.target.value,
                });
              }}
            />
          </Form.Group>
        </div>
        <Button type="submit">Add User</Button>
      </Form>
    </Container>
  );
};

export default AddUserForm;
