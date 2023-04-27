import { Button, Container, Form, Alert, Spinner } from "react-bootstrap";
import { useState } from "react";
import "./styles/Login.css";
import axios from "axios";
import { BASE_URL } from "../../App";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    loading: false,
    err: false,
  });

  const handleLogin = (e) => {
    e.preventDefault();
    setLogin({ ...login, loading: true, err: false });
    axios
      .post(BASE_URL + "/auth/login", {
        email: login.email,
        password: login.password,
      })
      .then((res) => {
        setLogin({ ...login, loading: false, err: false });
      })
      .catch((err) => {
        setLogin({ ...login, loading: false, err: true });
      });
  };

  return (
    <Container className="login-form-container bg-dark text-light p-4">
      {login.err && (
        <Alert className="text-center" variant="danger">
          Failed to login
        </Alert>
      )}
      <header className="login-header pt-4">
        <h1>Login</h1>
      </header>
      <Form className="p-4 d-flex flex-column" onSubmit={handleLogin}>
        <Form.Group className="email  my-3">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            placeholder="Enter Email"
            required
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="password  my-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            placeholder="Enter Password"
            required
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
        </Form.Group>
        <Button
          type="submit"
          className="btn btn-primary my-3"
          disabled={login.loading}
        >
          {login.loading ? (
            <Spinner animation="border" variant="light" size="sm" />
          ) : (
            "Login"
          )}
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
