import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center">

        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h2 className="mb-3">Page Not Found</h2>

        <p className="text-muted mb-4">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link to="/" className="btn btn-primary me-2">
          Go Home
        </Link>

        <Link to="/contact" className="btn btn-outline-secondary">
          Contact Support
        </Link>

      </div>
    </div>
  );
}