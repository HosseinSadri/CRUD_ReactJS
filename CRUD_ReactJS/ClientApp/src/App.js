import React, { Component } from 'react';
import { Route } from 'react-router';
import { Home } from './components/Home';
import { About } from './components/About';
import { ProductList } from './components/Product/ProductList';
import { InsertProduct } from './components/Product/InsertProduct';
import { EditProduct } from './components/Product/EditProduct';
import { ContactUs } from './components/ContactUs';
import { Layout } from './components/Layout/Layout';
import CalculatorPage   from'./components/Calculator/CalculatorPage';
import { Register } from './components/Account/Register';
import { Login } from './components/Account/Login';
export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <Layout >
                <Route exact path='/' component={Home} />
                <Route path='/home' component={Home} />
                <Route path='/About' component={About} />
                <Route path='/ContactUs' component={ContactUs} />
                <Route path='/ProductList' component={ProductList} />
                <Route path='/InsertProduct' component={InsertProduct} />
                <Route path='/Calculator' component={CalculatorPage} />
                <Route path='/Register' component={Register} />
                <Route path='/Login' component={Login} />
                <Route path='/EditProduct/:testvalue' component={EditProduct} />
            </Layout>
        );
    }
}
