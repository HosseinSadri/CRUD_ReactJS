import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { setTimeout } from 'timers';
import { MessageModal } from '../Layout/MessageModal'
import { Cities } from '../Tools/Cities';
//bootstrap 3.3.7


export class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            ProductDetails: null,
        }
        //console.log(this.props.match.params.testvalue);
    }
    componentDidMount() {
        fetch(`api/product/ProductDetails/?id=${this.props.match.params.testvalue}`)
            .then(res => res.json())
            .then(x => {
                //console.log(JSON.stringify(x));
                this.setState({ ProductDetails: x });
            });
        // console.log('componentDidMount')
        //console.log(this.state.ProductDetails)
    }
    test=() =>{
        console.log(this.state.ProductDetails)
    }
    render() {
        return (
            <div>
                <button onClick={this.test}>test</button>
                <Formik
                   
                    initialValues={{
                        Name: this.state.ProductDetails != null ? this.state.ProductDetails.name : "Name",
                        Price: this.state.ProductDetails != null ? this.state.ProductDetails.price : "Price",
                        Count: this.state.ProductDetails != null ? this.state.ProductDetails.count : "Count",
                    }}
                    //initialValues={{ Name: this.state.test, Price: "", Count: "" }}
                    enableReinitialize={true}
                    onSubmit={(values, { setSubmitting }) => {
                        //console.log(values)
                        fetch(`/api/Product/EditProduct?model=${JSON.stringify(values)}&id=${this.props.match.params.testvalue}`
                            , { method: 'PUT' })
                        this.setState({ status: true },
                            ()=>this.props.history.push('/productlist')
                        )
                        setTimeout(() => {
                            setSubmitting(false)
                            this.setState({ status: false })
                        }, 3000);

                        values.Name = "";
                        values.Price = "";
                        values.Count = "";
                    }}
                    validationSchema={Yup.object().shape({
                        Name: Yup.string().required("Required!!"),
                        Price: Yup.string().required("Required!!"),
                        Count: Yup.string().required("Required!!")
                    })}
                >
                    {props => {
                        const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit
                        } = props;
                        return (

                            <div className="col-md-4 col-md-offset-4">
                                {this.state.status
                                    ? < MessageModal Header="Product Update Form" Message="Your Product Updated" />
                                    : null
                                }
                                <form className="FormSubmit" onSubmit={handleSubmit}>
                                    <h3 className="text-center">Update Product</h3>
                                    <div className="form-Group">
                                        <label>Name</label>
                                        <input
                                            id="Name"
                                            placeholder=""
                                            type="text"
                                            value={values.Name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.Name && touched.Name
                                                ? "form-control error"
                                                : "form-control"
                                            }
                                        />
                                        {errors.Name && touched.Name && (<div className="input-feedback">{errors.Name}</div>)}
                                    </div>
                                    <div className="form-Group">
                                        <label>Price</label>
                                        <input
                                            id="Price"
                                            placeholder="Enter Product Price"
                                            type="text"
                                            value={values.Price}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.Price && touched.Price
                                                ? "form-control error"
                                                : "form-control"
                                            }
                                        />
                                        {errors.Price && touched.Price && (<div className="input-feedback">{errors.Price}</div>)}
                                    </div>
                                    <div className="form-Group">
                                        <label>Count</label>
                                        <input
                                            id="Count"
                                            placeholder="Enter Product Count"
                                            type="text"
                                            value={values.Count}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.Count && touched.Count
                                                ? "form-control error"
                                                : "form-control"
                                            }
                                        />
                                        {errors.Count && touched.Count && (<div className="input-feedback">{errors.Count}</div>)}
                                    </div>
                                    <div className="">
                                        <Cities />

                                    </div>
                                    <div>
                                        <button type="submit"
                                            disabled={isSubmitting}
                                            className="btn btn-primary btn-block"> Upadte Product </button>
                                    </div>
                                </form>
                            </div>
                        )
                    }}
                </Formik>
            </div>
        )
    }
}

