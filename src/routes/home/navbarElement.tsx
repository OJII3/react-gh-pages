import React from "react";

// NavbarElementをimportしたページは自動的にスタイルもインポートされる
import 'bootstrap/dist/css/bootstrap.min.css';

// bootstrap component
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { LinkContainer } from 'react-router-bootstrap';

// ほぼコピペ from
// https://react-bootstrap.github.io/components/navbar/
const expand = false;
const NavbarElement = () => {
  return (
    <Navbar key={expand || 'false'} bg="light" expand={expand} className="mb-3">
      <Container fluid>
        <LinkContainer to='/home'>
          <Navbar.Brand>OJII3</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              MENU
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <LinkContainer to='/home'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/react">
                <Nav.Link>ReactTemplate</Nav.Link>
              </LinkContainer>
              <NavDropdown title='Works' id={`offcanvasNavbarDropdown-expand-${expand}`}>
                <LinkContainer to='/home/tetris'>
                  <NavDropdown.Item >Tetris</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/home/breakout2d'>
                  <NavDropdown.Item>Breakout2D</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title="Others" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                <NavDropdown.Item href="https://github.com/OJII3">GitHub</NavDropdown.Item>
                <NavDropdown.Item href="https://qiita.com/OJII3">Qiita</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                name='q'
              />
              <LinkContainer to={`/home/search?${FormData}`}>
                <Button variant="outline-success">Search</Button>
              </LinkContainer>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarElement;