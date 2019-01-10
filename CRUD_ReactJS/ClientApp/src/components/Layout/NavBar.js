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
    
    componentWillReceiveProps(props) {
        this.setState({
            username: this.props.username
        })
    }


    test2 = () => {
        console.log('test2');
        fetch('api/Test/LoadJson?a=1')
        
    }
    test = () => {
        //this.setState({ username: this.props.username })
        //console.log(this.state)
        //console.log('props:')
        //console.log(this.props)
    }
    GetAutenticationStatus = () => {
    console.log(this.props.username);
        console.log('getStatus:');
        fetch('api/Account/AuthenticatedUser')
            .then(res => res.json())
            .then(x => {
                console.log(x);
                console.log(this.props.username);
                this.setState({ username: x });
            });
    }
    logout = () => {
        console.log('inlogout:');
        fetch('api/Account/LogOut')
            .then(x => {
                console.log('logout successfully')
                this.setState({ username: '' });
            });
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
                <hr />
                <hr />
                <hr />
                <button className="btn btn-success" onClick={this.GetAutenticationStatus}>status</button>
                <button className="btn btn-success" onClick={this.logout}>logout</button>
                <button className="btn btn-success" onClick={this.test}>test</button>
                <hr />
                <button className="btn btn-success" onClick={this.test2}>test2</button>

            </div>
        );
    }
}

