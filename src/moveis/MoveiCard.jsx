import React, { Component } from 'react'
import { Col, Image, Button } from 'react-bootstrap'

export default class MoveiCard extends Component {
    render() {
        return (
            <Col md={3} className="m-2" style={{borderStyle :"double" , borderRadius : "30px", display:"flex" , flexDirection : "column" ,alignItems :"center"}}>
                <Image roundedCircle style={{height:150 , width:150}} src="https://via.placeholder.com/150" ></Image>
                <p>name</p>
                <h5>history</h5>
                <h5>type</h5>
                <h4>Your name </h4>
                <Button variant="outline-warning">more info</Button>

            </Col>
        )
    }
}
