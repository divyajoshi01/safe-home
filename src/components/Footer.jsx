import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
      <div className="container text-md-left">
        <div className="row text-md-left">

          {/* Website Info */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 text-start">
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">PG Finder</h5>
            <p className="small text-secondary">
              The most affordable and comfortable PG search engine for students in Bhilai and Durg.
            </p>
          </div>

          {/* Quick Links - Link Tag Used Here */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-start">
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/HeroSection" className="text-white text-decoration-none small">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/rooms" className="text-white text-decoration-none small">Find Rooms</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white text-decoration-none small">Contact Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white text-decoration-none small">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 text-start">
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Follow Us</h5>
            <div className="d-flex gap-3 mt-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white fs-4"><i className="bi bi-facebook fb-icon"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white fs-4"><i className="bi bi-instagram ig-icon"></i></a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="text-white fs-4"><i className="bi bi-whatsapp wa-icon"></i></a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 text-start" >
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Contact</h5>
            <p className="small"><i className="bi bi-geo-alt-fill me-2"></i> Bhilai, Chhattisgarh</p>
            <p className="small"><i className="bi bi-envelope-fill me-2"></i> help@pgfinder.com</p>
            <p className="small"><i className="bi bi-telephone-fill me-2"></i> +91 98765 43210</p>
          </div>

        </div>

        <hr className="mb-4 mt-4" />

        <div className="row">
          <div className="col-md-12 text-center">
            <p className="small mb-0">© 2026 <strong>PG Finder</strong>. All Rights Reserved.</p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .fb-icon:hover { color: #1877F2; }
        .ig-icon:hover { color: #E4405F; }
        .wa-icon:hover { color: #25D366; }
        .bi { transition: 0.3s; }
      `}} />
    </footer>
  );
};

export default Footer;