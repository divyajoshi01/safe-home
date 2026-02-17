import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <Container className="text-center text-white">
          <h1 className="display-2 fw-bold mb-3">Safe Home</h1>
          <p className="lead mb-4">
            Find safe and affordable PGs & rentals near you.
          </p>
          <Link
            className="btn btn-primary btn-lg tw-btn-hover-white bg-main-600 tw-py-5 tw-px-12 text-heading font-heading d-inline-flex align-items-center tw-gap-3 tw-rounded-lg "
            to="/contact"
          >
            Booking today{" "}
            <span className="d-inline-block lh-1 tw-text-lg">
              <i className="ph ph-arrow-up-right"></i>
            </span>
          </Link>
        </Container>
      </div>
    </div>
  );
}

export default HeroSection;
