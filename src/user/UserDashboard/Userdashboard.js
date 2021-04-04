import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

import axios from 'axios';

const url = 'http://localhost:8080/api/employees';

class UserDashboard extends React.Component {
  state = {
    employees: [],
    filterValue: '',
    filterEmployees: [],
  };

  componentDidMount = () => {
    axios
      .get(url)
      .then(response => {
        this.setState({ employees: response.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteEmployee(id) {
    const confirmDelete = window.confirm('Delete employee forever?');
    if (confirmDelete) {
      axios.delete(`${url}/${id}`).then(res => console.log(res.data));
      this.setState({
        employees: this.state.employees.filter(el => el.id !== id),
      });
    }
  }
  

  openEditFormHandler = id => {
    this.props.history.replace(`/edit/${id}`);
  };

  openAddFormHandler = () => {
    window.location.href = '/add';
  };

  changeHandler = prop => this.setState({ [prop.name]: prop.value });

  render() {
    
    return (
      <div>
        
        <Container>
          <Row>
            <Col>
            <br></br>
            </Col>
          </Row>
          <Row>
            <Col xs={5} sm={5}>
              <Button
                variant="primary"
                size="sm"
                onClick={this.openAddFormHandler.bind(this)}
              >
                Add Employee
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
            <br></br>
            </Col>
          </Row>
          <Row>
            <Col>
          <Button
                variant="primary"
                size="sm"
                onClick={this.openEditFormHandler.bind(this)}
              >
                Edit Employee
              </Button>
              </Col>
              </Row>
          
        </Container>
      </div>
    );
  }
}


export default UserDashboard;
