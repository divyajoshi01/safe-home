import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3 shadow-sm">
      <Container>

        {/* Logo - SAME */}
        <Navbar.Brand  className="fw-bold">
          Safe Home
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">

            <Nav.Link as={Link} to="/listings" className="me-lg-3">
              PGListing
            </Nav.Link>

            <Nav.Link as={Link} to="/about" className="me-lg-3">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="me-lg-3">
              Contact
            </Nav.Link>

            {/* Login Button */}
            <Button
              as={Link}
              to="/login"
              variant="outline-light"
              className="me-2 mt-2 mt-lg-0"
            >
              Login
            </Button>

            {/* Sign Up Button */}
            <Button
              as={Link}
              to="/signup"
              variant="warning"
              className="mt-2 mt-lg-0"
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
