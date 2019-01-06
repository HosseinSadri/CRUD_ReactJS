import React, { Component } from 'react';
import { Grid, Table, Button, Glyphicon, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export class ProductList extends Component {
    constructor() {
        super();
        this.state = { ProductList: [] };
        this.GetProductList();
    }
    GetProductList() {
        fetch('api/product/ProductList')
            .then(res => res.json())
            .then(x => {
                console.log(JSON.stringify(x));
                this.setState({ ProductList: x });
            });
    }

    render() {
        return (
            <Grid className=''>
                <div >
                    <Col xs={7} sm={10}>
                        <h4>Product List:</h4>
                    </Col>
                    <Col xs={3} sm={1}>
                        <LinkContainer to="/InsertProduct">
                            <Button bsStyle="success">
                                <Glyphicon glyph="plus" />  Add Product
                            </Button>
                        </LinkContainer>
                    </Col>
                </div>
                <Table hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Count</th>
                            <th>City</th>
                            <th>Detail</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.ProductList.map(item =>
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.count}</td>
                                <td>
                                    <abbr title={item.province}>{item.city}</abbr>
                                </td>
                                <td className='col-xs-1'>
                                    <Button bsStyle="primary" >
                                        <Glyphicon glyph="file" />
                                    </Button>
                                </td>
                                <td className='col-xs-1'>
                                    <Button bsStyle="info">
                                        <Glyphicon glyph="pencil" />
                                    </Button>
                                </td>
                                <td className='col-xs-1'>
                                    <Button bsStyle="danger">
                                        <Glyphicon glyph="trash" />
                                    </Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Grid>
        );
    }
}
