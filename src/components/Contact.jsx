import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save data to localStorage
    localStorage.setItem("contactFormData", JSON.stringify(formData));

    // 2 sec baad alert
    setTimeout(() => {
      alert("Form submitted successfully ✅");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <div className="contact-page">
      {/* HERO SECTION */}
      <div className="contact-hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <p className="sub-heading">EXPERIENCE THE STORY</p>
          <h1>Contact Us</h1>
        </div>
      </div>

      <br />
      <br />

      {/* FORM SECTION */}
      <div className="contact-form-box">
        <h2 className="text-center text-uppercase text-success mt-5 fw-bold">
          Book your Room
        </h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="explore-btn">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
