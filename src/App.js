import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/UI/NavBar/NavBar';
import UserDashboard from './user/UserDashboard/UserDashboard';
import Viewboard from './user/UserDashboard/Viewboard';
import EditForm from './user/Forms/EditForm';
import AddForm from './user/Forms/AddForm';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar title="Employee management system" />
        <Route path="/" exact component={UserDashboard} />
        <Route path="/edit" component={EditForm} />
        <Route path="/add" component={AddForm} />
        <Route path="/list" exact component={Viewboard} />
      
      </div>
    </Router>
  );
}

export default App;
