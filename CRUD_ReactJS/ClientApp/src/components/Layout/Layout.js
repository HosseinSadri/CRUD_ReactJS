import React, { Component } from 'react';
import { NavBar } from './NavBar';
import FooterPage from './FooterPage';
//import { FooterPage } from './FooterPage';


export class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }
    }
    componentWillMount() {
        //console.log('didmount')
        this.renderUpdate();
    }
   
    componentDidMount() {
        //this.renderUpdate();
        // this.render2();
       

       // return <Redirect to='/hoe'/>
        
    }
    render2 = () => {
        //console.log('r2')
       //console.log(this.state);
        //const someCondition = true;
        //if (someCondition) {
        //    console.log('if')
        //    console.log(this.state.username)
        //    return <NavBar username={this.state.username} />
        //}
        //return null
    }
    renderUpdate = () => {
        //console.log('renderupdate')
        //console.log(this.state.userName)
        fetch('api/Account/AuthenticatedUser')
            .then(res => res.json())
            .then(x => {
                //console.log(x);
                this.setState({ username: x });
            });
    }

    render() {
        return (
            <div>
                <div>
                    <NavBar username={this.state.username}/>
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