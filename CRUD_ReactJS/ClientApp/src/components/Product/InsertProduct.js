import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { setTimeout } from 'timers';
import { MessageModal } from '../Layout/MessageModal'
import { Cities } from '../Tools/Cities';
//bootstrap 3.3.7
export class InsertProduct extends Component {
    state = { status: false }
    render() {
        return (
            <div>

                <Formik
                    initialValues={{ Name: "", Price: "", Count: "" }}
                    onSubmit={(values, { setSubmitting }) => {
                       
                        fetch(`/api/Product/InsertProduct?model=${JSON.stringify(values)}`, { method: 'Post' })
                        this.setState({ status: true })
                        setTimeout(() => {
                            setSubmitting(false)
                            this.setState({ status: false })
                        }, 3000);
                        console.log('hsihi');
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

                            <div className="col-md-4 col-md-offset-4 ShadowOut" style={{ paddingBottom:'15px' }}>
                                {this.state.status
                                    ? < MessageModal Header="Product Insert Form" Message="Your Product Saved" />
                                    : null
                                }
                                <form className="FormSubmit" onSubmit={handleSubmit}>
                                    <h3 className="text-center">Insert Product</h3>
                                    <div className="form-Group">
                                        <label>Name</label>
                                        <input
                                            id="Name"
                                            placeholder="Enter Product Name"
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
                                            type="number"
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
                                            type="number"
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
                                            className="btn btn-primary btn-block"> submit </button>
                                    </div>
                                </form>
                            </div>
                        )
                    }}
                </Formik>
            </div >
        )
    }
}

