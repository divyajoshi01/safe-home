import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    city: "",
    minPrice: "",
    maxPrice: "",
    roomType: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams(formData).toString();

    navigate(`/listings?${queryParams}`);
  };

  return (
    <Container className="bg-white p-4 rounded shadow">
      <Form onSubmit={handleSubmit}>
        <Row className="g-3">
          <Col md={3}>
            <Form.Control
              type="text"
              placeholder="City"
              name="city"
              onChange={handleChange}
            />
          </Col>

          <Col md={3}>
            <Form.Control
              type="number"
              placeholder="Min Price"
              name="minPrice"
              onChange={handleChange}
            />
          </Col>

          <Col md={3}>
            <Form.Control
              type="number"
              placeholder="Max Price"
              name="maxPrice"
              onChange={handleChange}
            />
          </Col>

          <Col md={2}>
            <Form.Select name="roomType" onChange={handleChange}>
              <option value="">Room Type</option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
            </Form.Select>
          </Col>

          <Col md={1}>
            <Button type="submit" className="w-100">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default SearchForm;
