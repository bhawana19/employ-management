import React from 'react';
import { Row, Col, } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import Tableview from '../../components/Tables/Tableview';

const url = 'http://localhost:8080/api/employees';

class Viewboard extends React.Component {
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
    const { employees, filterValue, filterEmployees } = this.state;
    const filteredEmployees = !filterValue ? employees : filterEmployees;
    // filterValue === '' ? employees : filterEmployees;
    return (
      <div>
            <Col xs={7} sm={7}>
              <H1>Employee List</H1>
            </Col>
          <Row>
            <Col xs={12} sm={12} className="text-center">
              <Tableview
                filteredEmployees={filteredEmployees}
                deleteEmployee={this.deleteEmployee.bind(this)}
                openEditForm={this.openEditFormHandler.bind(this)}
              />
            </Col>
          </Row>
      </div>
    );
  }
}

const H1 = styled.h1`
  font-size: 2em;
`;

export default Viewboard;