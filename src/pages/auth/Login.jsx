import { Button, Container, Form, Alert } from "react-bootstrap";
import "./styles/Login.css";

const Login = () => {
  return (
    <Container className="login-form-container bg-dark text-light p-4">
      <Alert className="text-center" variant="danger">
        Failed to Login
      </Alert>
      <header className="login-header pt-4">
        <h1>Login</h1>
      </header>
      <Form className="p-4 d-flex flex-column">
        <Form.Group className="email  my-3">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control type="email" id="email" placeholder="Enter Email" />
        </Form.Group>
        <Form.Group className="password  my-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            placeholder="Enter Password"
          />
        </Form.Group>
        <Button type="submit" className="btn btn-primary my-3">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
