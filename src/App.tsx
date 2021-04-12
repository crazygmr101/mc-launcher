import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import {
  Button,
  Col,
  Form,
  FormControl,
  Modal,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faFolder, faCogs } from '@fortawesome/free-solid-svg-icons';

library.add(faPlusSquare, faFolder, faCogs);

const Main = () => {
  const [show, setShow] = useState(false);

  const settingsClose = () => setShow(false);
  const settingsShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Menu</Navbar.Brand>
        <Navbar.Collapse id="title-bar">
          <Nav className="mr-auto">
            <NavDropdown title="Add Instance" id="add-instance-dropdown">
              <NavDropdown.Item>Vanilla</NavDropdown.Item>
              <NavDropdown.Item>Snapshot</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Curseforge</NavDropdown.Item>
              <NavDropdown.Item>Technic</NavDropdown.Item>
              <NavDropdown.Item>Custom Forge</NavDropdown.Item>
              <NavDropdown.Item>Custom Fabric</NavDropdown.Item>
              <NavDropdown.Item>Modrinth</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><FontAwesomeIcon icon="folder" size="lg" /> Game Folders</Nav.Link>
            <Nav.Link onClick={settingsShow}><FontAwesomeIcon icon="cogs" size="lg" /> Settings</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search Instances" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={settingsClose} bg="dark" variant="dark">
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Min Memory (MB)</Form.Label>
                <Form.Control
                  required
                  type="text"
                  defaultValue="1024"
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Max Memory (MB)</Form.Label>
                <Form.Control
                  required
                  type="text"
                  defaultValue="1024"
                />
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={settingsClose}>
            Close
          </Button>
          <Button variant="primary" onClick={settingsClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
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
