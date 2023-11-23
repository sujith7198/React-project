import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const validateForm = () => {
      const errors = {};
      let isValid = true;

      if (!formData.name.trim()) {
        errors.name = 'Name is required';
        isValid = false;
      } else if (formData.name.length < 4) {
        errors.name = 'Name must be at least 4 characters long';
        isValid = false;
      }

      if (!formData.password.trim()) {
        errors.password = 'Password is required';
        isValid = false;
      } else if (formData.password.length < 4) {
        errors.password = 'Password must be at least 4 characters long';
        isValid = false;
      }

      setErrors(errors);
      setIsFormValid(isValid);
    };

    validateForm();
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      setTimeout(() => {
        setMessage(`Registration complete! Name: ${formData.name}, Password: ${formData.password}`);
        navigate('/deets');
      }, 1000);
    }
  };

  return (
    <div style={{ backgroundColor: 'gray', padding: '20px', textAlign: 'center' }}>
      <Container>
        <Row>
          <Col style={{ backgroundColor: 'greenyellow', borderRadius: '10px', padding: '20px', margin: 'auto' }}>
            <h2>Registration form</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit" disabled={!isFormValid}>
                Submit
              </Button>
            </Form>
            {message}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Registration;
