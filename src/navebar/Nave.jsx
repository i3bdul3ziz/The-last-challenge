import React, { Component } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default class Nave extends Component {
    render() {
        return (
            <div>

                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Navbar.Brand>Qc</Navbar.Brand>
                       
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Allmovie">Allmovie</Nav.Link>
                        <Nav.Link as={Link} to="/About">About</Nav.Link>
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
