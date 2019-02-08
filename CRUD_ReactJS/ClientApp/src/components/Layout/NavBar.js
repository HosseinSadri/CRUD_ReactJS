import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Nav, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: '',
            username: props.username
        }
    }
    handleMouseOut = (event) => {
        setTimeout(() => {
            this.setState({
                status: 'none'
            })
        }, 500);
    }
    handleMouseOver = () => {
        this.setState({
            status: ''
        })
    }
    handleClick = () => {
        this.setState({
            status: ''
        })
    }
    render() {
        return (
            <div>

                <Navbar collapseOnSelect fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to={`/`}>
                                <Glyphicon glyph='home' className='magenta' /> ShopMan</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle onToggle={null}
                            onClick={this.handleClick}
                        />
                    </Navbar.Header>
                    <Navbar.Collapse
                        onMouseLeave={this.handleMouseOut}
                        onMouseOver={this.handleMouseOver}
                        style={{ display: `${this.state.status}` }}>
                        <Nav>
                            <LinkContainer to="/home">
                                <NavItem >
                                    <Glyphicon glyph='' /> Home
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer to="/ProductList">
                                <NavItem >
                                    <Glyphicon glyph='' /> Product
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer to="/Calculator">
                                <NavItem >
                                    <Glyphicon glyph='' /> Calculator
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer to="/Contactus">
                                <NavItem >
                                    <Glyphicon glyph='' /> Contact us
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer to="/About">
                                <NavItem >
                                    <Glyphicon glyph='' /> About
                                </NavItem>
                            </LinkContainer>
                        </Nav>
                        <Nav pullRight>
                            <LinkContainer to="/">
                                <NavItem >
                                    <Glyphicon glyph='' /> {this.state.username}
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer to="/Login">
                                <NavItem >
                                    <Glyphicon glyph='user' /> Login
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer to="/Register">
                                <NavItem >
                                    <Glyphicon glyph='' /> Register
                                </NavItem>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div >
        );
    }
}