import { NavLink } from "react-router-dom";
import "./styles/Header.css";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  const Logout = () => {
    console.log("log out");
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink className="nav-logo navbar-brand" to="/">
            Meds
          </NavLink>
          <Nav className="">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="manage-users">
              Users
            </NavLink>
            <NavLink className="nav-link" to="manage-categories">
              Categories
            </NavLink>
            <NavLink className="nav-link" to="manage-medicines">
              Medicines
            </NavLink>
            <NavLink className="nav-link" to="manage-requests">
              Requests
            </NavLink>
          </Nav>
          <Nav className="">
            <Nav.Link onClick={Logout}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
