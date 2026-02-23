import React from "react";

function About() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="position-relative d-flex justify-content-center align-items-center text-white"
        style={{
          height: "75vh",
          backgroundImage:
            'url("https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>

        {/* Hero Content */}
        <div className="position-relative text-center">
          <p className="text-uppercase letter-spacing mb-2 small">
            Experience Safe Living
          </p>
          <h1 className="display-3 fw-semibold">
            About Safe Home
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-4 my-5">
        
        {/* About Description */}
        <div className="row justify-content-center py-5">
          <div className="col-lg-8 text-center">
            <p className="text-muted fs-5" style={{background:"crimson", color:"white"}}>
              Safe Home is a modern PG and rental platform designed to make
              room searching simple and stress-free. Users can search rooms
              city-wise, filter by price range, and explore different room
              categories like PG, 1RK, 1BHK, and Studio apartments.
            </p>
          </div>
        </div>

        {/* Mission Section */} 
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg border-0 text-center p-4">
              <h4 className="fw-bold mb-3">Our Mission</h4>
              <p className="text-muted mb-0">
                To provide a reliable, transparent, and user-friendly platform
                for house hunting with complete ease and safety.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default About;
