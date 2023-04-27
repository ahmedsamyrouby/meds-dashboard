import { NavLink } from "react-router-dom";
import "./styles/Header.css";
import { Navbar, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  const handleLogout = () => {
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
          <Nav>
            <NavDropdown title="Admin Name" menuVariant="dark">
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
