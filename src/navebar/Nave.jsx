import React, { Component } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
export default class Nave extends Component {
    render() {
        return (
            <div>

                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Navbar.Brand>Qc</Navbar.Brand>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/Allmovie">Allmovie</Nav.Link>
                        <Nav.Link href="/About">About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="outline-light" > login</Button>
                        <Button variant="outline-light" className="ml-3"> sing up</Button>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
