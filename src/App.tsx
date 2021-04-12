import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faFolder, faCogs } from "@fortawesome/free-solid-svg-icons"

library.add(faPlusSquare, faFolder, faCogs)

const Main = () => {
  return (
    <Navbar className="text-light bg-dark">
      <Navbar.Brand>Menu</Navbar.Brand>
      <Navbar.Collapse id="title-bar">
        <Nav className="mr-auto">
          <Nav.Link><FontAwesomeIcon icon="plus-square" size="lg"/> Add Instance</Nav.Link>
          <Nav.Link><FontAwesomeIcon icon="folder" size="lg"/> Game Folders</Nav.Link>
          <Nav.Link><FontAwesomeIcon icon="cogs" size="lg"/> Settings</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search Instances" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}
