import React, { useState } from 'react';
import { Row, Col, Form, Container, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import { closeForm } from '../../utils/CloseForm';

const addUrl = 'http://localhost:8080/api/add/employees/';


const department = ['Select', 'Tech','Sales', 'Security', 'Legal'];


function AddForm() {
  const [employee, setEmployee] = useState({
    name: '',
    birthdate: '',
    department: '',
    experience: '',
    assigned: false,
  });

  const onChangeName = event => {
    setEmployee({
      ...employee,
      name: event.target.value,
    });
  };

  const onChangeBirthdate = event => {
    setEmployee({
      ...employee,
      birthdate: event.target.value,
    });
  };

  const onChangeDepartment = event => {
    setEmployee({
      ...employee,
      department: event.target.value,
    });
  };

  const onChangeExperience = event => {
    setEmployee({
      ...employee,
      experience: event.target.value,
    });
  };

  const isInputFieldEmpty = () => {
    return (
      employee.name === '' ||
      employee.birthdate === '' ||
      employee.department === '' ||
      employee.experience === '' ||
      employee.assigned === null
    );
  };

  const handleSubmit = () => {
    axios.post(addUrl, employee).then(res => {
      console.log(res.data.data);
      closeForm();
    });
  };

  return (
    <Wrapper>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={9}>
            <H6>
              Please fill out the form to add an employee and then click
              the submit button.
            </H6>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={9}>
          <Card>
              <StyledCardHeader>Add Employee</StyledCardHeader>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="addName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="name"
                      placeholder="Please enter full name"
                      value={employee.name}
                      onChange={onChangeName}
                    />
                  </Form.Group>
                  <Form.Group controlId="addBirthdate">
                    <Form.Label>Birthdate</Form.Label>
                    <Form.Control
                      required
                      type="date"
                      name="birthdate"
                      placeholder="Please enter birthdate"
                      value={employee.birthdate}
                      onChange={onChangeBirthdate}
                    />
                  </Form.Group>
                  <Form.Group controlId="addDepartment">
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                      required
                      name="department"
                      as="select"
                      value={employee.department}
                      onChange={onChangeDepartment}
                    >
                      {department.map(department => (
                        <option key={department}>{department}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="addExperience">
                    <Form.Label>Experience</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      name="experience"
                      value={employee.experience}
                      onChange={onChangeExperience}
                    >
                    </Form.Control>
                  </Form.Group>
                  
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => closeForm()}
                  >
                    Cancel
                  </Button>
                  <StyledButton
                     className="style-button"
                     size="sm"
                     type="submit"
                     disabled={isInputFieldEmpty()}
                  >
                    Submit
                  </StyledButton>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 50px;
`;

const H6 = styled.h6`
  margin-bottom: 10px;
  color: #858484;
`;

const StyledCardHeader = styled(Card.Header)`
  background-color: #eea33b;
  color: #ffffff;
  font-weight: bold;
`;

const StyledButton = styled(Button)`
  margin-left: 5px;
`;
export default AddForm;
