import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function NavbarTest(props) {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{
          boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.25)',
          marginBottom: '20px'
        }}
      >
        <Navbar.Brand href="/">MaRi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/customers">Kunden</Nav.Link>
            {props.authorization ? <Nav.Link href="/logout">Abmelden</Nav.Link> :
              <Nav.Link href="/login">Anmelden</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}