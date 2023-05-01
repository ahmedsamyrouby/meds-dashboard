import { NavLink, useNavigate } from "react-router-dom";
import "./styles/Header.css";
import { Navbar, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { getAuthUser, removeAuthUser } from "../helper/storage";

const Header = () => {
  const auth = getAuthUser();
  const navigate = useNavigate();
  const handleLogout = () => {
    removeAuthUser();
    navigate("/login");
  };
  return (
    <header>
      {auth && (
        <Navbar bg="dark" variant="dark">
          <Container>
            <NavLink className="nav-logo navbar-brand" to="manage-users">
              Meds
            </NavLink>
            <Nav className="">
              {/* Authenticated Admin */}
              {auth && auth.type === 1 && (
                <>
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
                </>
              )}

              {/* Authenticated User */}
              {auth && auth.type === 0 && (
                <NavLink className="nav-link" to="medicines-list">
                  Medicines List
                </NavLink>
              )}
            </Nav>
            <Nav>
              <NavDropdown title={auth.name_user} menuVariant="dark">
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar>
      )}
    </header>
  );
};

export default Header;