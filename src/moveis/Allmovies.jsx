import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MoveiCard from './MoveiCard'

export default class Allmovies extends Component {
    render() {
        return (
            <div>
                <h1>All movie</h1>
                <Container className="mt-5">

                <Row  className="mt-5 justify-content-center" >
                
                    <MoveiCard />
                    <MoveiCard />
                    <MoveiCard />
                    <MoveiCard />
                    <MoveiCard />
                    <MoveiCard />
                    <MoveiCard />
                    <MoveiCard />
                </Row>

                </Container>

            </div>
        )
    }
}
