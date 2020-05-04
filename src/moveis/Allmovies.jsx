import React, { Component } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import MoveiCard from './MoveiCard'
import axios from "axios"
import Circle from 'react-animation-h3ro-yasir'
function solve(object, array) {
    let fee = array
    for (const key in object) {
        if (object[key] != "All") fee = fee.filter(el => el[key] == object[key] || Number(object[key].split('-')[0]) < el[key] & Number(object[key].split('-')[1]) > el[key])
    }
    return fee
}
export default class Allmovies extends Component {

    state = {
        allMoveis: [],
        loading: false,
        selectedMoveis: [],
        felter: { typee: "All", proposal: "All", history: "All" }

    }
    componentDidMount() {
        axios.get('https://sei12.herokuapp.com/movei/json')
            .then(res => {
                console.log(res)
                this.setState({
                    allMoveis: res.data,
                    selectedMoveis: res.data,
                    loading: true
                })
            }).catch(err => console.log(err))
    }
// function filter the movei 
    filterMoveis = ({ target: { name, value } }) => {
    //  test the output 
    console.log(name , value)
    }



    render() {

        let allmoveis = this.state.selectedMoveis.map(movei => {

            if (movei.link) return <MoveiCard movei={movei} />
        })
        let types = this.state.allMoveis.map(movei => movei.typee)

        return (
            <div>
                <h1>All movie</h1>
                <Container className="mt-5">
                    <Row className="mt-5 justify-content-center">
                          {/*  ================  Type  ===============*/}
                        <Col md={2}>
                            <Form.Label style={{ color: "white" }} >Type</Form.Label>
                            <Form.Control as="select" name="typee" onChange={(e) => this.filterMoveis(e)}>
                                <option>All</option>
                                {Array.from(new Set(types)).map(ele => (<option>{ele}</option>))}
                            </Form.Control>
                        </Col>
                           {/* =============== Proposal =============== */}
                        <Col md={2}>
                            <Form.Label style={{ color: "white" }} >Proposal</Form.Label>
                            <Form.Control as="select" name="proposal" onChange={(e) => this.filterMoveis(e)}>
                                <option>All</option>
                                <option>women</option>
                                <option>man</option>
                            </Form.Control>
                        </Col>
                           {/*  =============== History =============== */}
                        <Col md={2}>
                            <Form.Label style={{ color: "white" }}>History</Form.Label>
                            <Form.Control as="select" name="history" onChange={(e) => this.filterMoveis(e)}>
                                <option>All</option>
                                <option>1990-1999</option>
                                <option>2000-2009</option>
                                <option>2010-2020</option>
                            </Form.Control>
                        </Col>
                    </Row>
                    <Row className="mt-5 justify-content-center" >

                        {this.state.loading ? allmoveis : (<Circle />)}

                    </Row>

                </Container>

            </div >
        )
    }
}
