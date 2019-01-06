import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Row, Col, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
export class Circle extends Component {
    render() {
        let Items = [];
        for (var i = 0; i < 30; i++) {
            Items.push(<Image key={i.toString()} src={require('../Image/blackH.png')} width='30' />)
        }
        return <div>{Items}</div>;
    }
}
export class Home extends Component {
    constructor() {
        super();
        this.state = {
        }
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }
    handleMouseOver(event) {
        //event.target.width = 185;
         event.target.className = 'imageStyle' 
    }
    handleMouseOut(event) {
        //event.target.width = 175;
         event.target.className = 'imageStyleDef' 

    }
    cir1(event) {
        //event.target.width = 30;
        //{ event.target.src = require( '../Image/redH.png' )};
    }
    cir2(event) {
        //event.target.width = 30;
        //{ event.target.src = require('../Image/blackH.png') };
    }
    render() {
        return (
            <Grid className="text-center">
                <h1>ReactJS Web Site</h1>
                <p>Welcome to My React Js Project</p>
                <hr />
                <Row ref='row1'>
                    <LinkContainer to="/productlist">
                        <Col md={4} ref='c1'>
                            <Image ref='img1' name='1' className="imageStyleDef"
                                onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}
                                src={require('../Image/prod.png')} rounded width='175' />
                            <h3>Product</h3>
                        </Col>
                    </LinkContainer>
                    <LinkContainer to="/productlist">
                        <Col md={4} ref='c2'  >
                            <Image ref='img2' name='2' className="imageStyleDef"
                                onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}
                                src={require('../Image/calc.png')} rounded width='175' />
                            <h3>Calculator</h3>
                        </Col>
                    </LinkContainer>
                    <LinkContainer to="/About">
                        <Col md={4} ref='c3' >
                            <Image ref='img3' name='3' className="imageStyleDef"
                                onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}
                                src={require('../Image/about.png')} rounded width='175' />
                            <h3>About</h3>
                        </Col>
                    </LinkContainer>

                </Row>
                <Row>
                    <div className='visible-lg heartCricle ' onMouseOver={this.cir1} onMouseOut={this.cir2} >
                        
                        <Circle/>
                    </div>
                </Row>
            </Grid>
        );
    }
}
