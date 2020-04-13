import React, { Component } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import MoveiCard from './MoveiCard'
import axios from "axios"

export default class Allmovies extends Component {

    state = {
        allMoveis: [],
        loading: false,
        selectedMoveis: []
    }

    componentDidMount() {

        axios.get('https://sei12.herokuapp.com/movei/json')
            .then(res => {
                this.setState({
                    allMoveis: res.data
                })
            }).catch(err => console.log(err))



    }





    render() {
        console.log(this.state.allMoveis)

        let allmoveis = this.state.allMoveis.map(movei => {


            if (movei.link) return <MoveiCard movei={movei} />
        })
        let types = this.state.allMoveis.map(movei =>movei.typee)
            types.unshift("All")
        return (
            <div>
                <h1>All movie</h1>
                <Container className="mt-5">
                    <Row className="mt-5 justify-content-center">
                        <Col md={4}>
                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select">
                            {Array.from(new Set(types)).map(ele => (<option>{ele}</option>))}
                          
                        </Form.Control>
                        </Col>
                    </Row>
                <Row className="mt-5 justify-content-center" >

                    {allmoveis}

                </Row>

                </Container>

            </div >
        )
    }
}
