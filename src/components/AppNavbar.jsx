import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3 shadow-sm">
      <Container>

        {/* Logo */}
        <img src="image.png" alt="logo not found" />
        <Navbar.Brand  as={Link} to="/" className="fw-bold">

          Safe Home
        </Navbar.Brand>

        {/* Sidebar Hamburger (Mobile Only) */}
        <button
          className="btn btn-outline-light ms-2 d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileSidebar"
        >
          <i className="bi bi-list"></i>
        </button>

        {/* Normal Navbar Links (Desktop me collapse hoga) */}
        <Navbar.Collapse className="justify-content-end d-none d-lg-flex">
          <Nav className="align-items-lg-center">

            <Nav.Link as={Link} to="/listings" className="me-lg-3">
              PGListing
            </Nav.Link>

            <Nav.Link as={Link} to="/about" className="me-lg-3">
              about
            </Nav.Link>

            <Nav.Link as={Link} to="/contact" className="me-lg-3">
              contact
            </Nav.Link>

            <Button
              as={Link}
              to="/login"
              variant="outline-light"
              className="me-2"
            >
              Login
            </Button>

            <Button
              as={Link}
              to="/signup"
              variant="warning"
            >
              Sign Up
            </Button>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default AppNavbar;
