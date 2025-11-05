import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaTasks, FaHome, FaUser } from "react-icons/fa";

const CustomNavbar = () => {
  const location = useLocation();

  const getActive = (path) => (location.pathname === path ? "active fw-bold" : "");

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <FaTasks color="#0d6efd" size={22} />
          <span>Task Manager</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto gap-3">
            <Nav.Link as={Link} to="/" className={getActive("/")}>
              <FaHome className="me-1" />
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/tasks" className={getActive("/tasks")}>
              <FaTasks className="me-1" />
              Tareas
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className={getActive("/login")}>
              <FaUser className="me-1" />
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;