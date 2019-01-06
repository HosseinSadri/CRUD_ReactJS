import React, { Component } from 'react';
import { NavBar } from './NavBar';
import FooterPage from './FooterPage';
//import { FooterPage } from './FooterPage';

export class Layout extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar/>
                </div>
                
                <div className="content">
                    {this.props.children}    
                </div>
                <div>
                    <FooterPage />
                </div>
            </div>
        );
    }
}