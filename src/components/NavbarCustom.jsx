import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavbarCustom = () => {
  const {logout } = useAuth();
  const location = useLocation();

  // Ocultar navbar en login
  if (location.pathname === "/") return null;

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/dashboard" className="fw-bold text-primary">
          🧠 Mi Gestor
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link as={Link} to="/dashboard" className="me-3">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/tasks" className="me-3">
              Tareas
            </Nav.Link>
            <Button variant="outline-light" size="sm" onClick={logout}>
              Cerrar sesión
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCustom;