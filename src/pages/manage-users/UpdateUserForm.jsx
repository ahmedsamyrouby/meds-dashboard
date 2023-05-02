import { Container, Form, Dropdown, Button, Alert } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import { BASE_URL } from "../../App";
import { useEffect, useState } from "react";
// import { getAuthUser } from "../../helper/storage";

const UpdateUserForm = () => {
  const { id } = useParams();

  const [currentUser, setCurrentUser] = useState({
    userId: "",
    userName: "",
    userPhoneNum: "",
    userEmail: "",
    userRole: 0,
    userStatus: 1,
    resMsg: null,
  });

  const getUserData = () => {
    axios.get(BASE_URL + "/user/" + id).then((res) => {
      setCurrentUser({
        ...currentUser,
        userId: res.data[0].id_user,
        userPhoneNum: res.data[0].phone_user,
        userName: res.data[0].name_user,
        userEmail: res.data[0].email,
        userRole: res.data[0].type,
      });
    });
  };

  useEffect(()=> {
    getUserData()
  }, []);

  const updateUser = (e) => {
    e.preventDefault();
    axios.put(BASE_URL + "/user/" + id, {
      type: currentUser.userRole
    }).then(res => {
      setCurrentUser({...currentUser, resMsg: res.data.msg})
    }).catch(e=> {
      console.log(e.message)
    });

    setTimeout(() => {
      setCurrentUser({
        ...currentUser,
        resMsg: null,
      });
    }, 3000);
  }

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
        onSubmit={updateUser}
      >
                {currentUser.resMsg && (
          <Alert variant="success" className="w-100 text-center">
            {currentUser.resMsg}
          </Alert>
        )}
        <div className="d-flex w-100">
          <Form.Group className="w-75 mb-4 me-3">
            <Form.Label className="text-light">Enter Email Address:</Form.Label>
            <Form.Control
              disabled
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
              disabled
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
              disabled
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
              disabled
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
        <Button type="submit">Update User</Button>
      </Form>
    </Container>
  );
};

export default UpdateUserForm;
