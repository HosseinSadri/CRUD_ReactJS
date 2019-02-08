import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { setTimeout } from 'timers';
import { MessageModal } from '../Layout/MessageModal'
//bootstrap 3.3.7
export class Register extends Component {
    state = { status: false }
    render() {
        return (
            <div>
                <Formik
                    initialValues={{ Email: "", Password: "", RePassword: "" }}
                    onSubmit={(values, { setSubmitting }) => {
                        //console.log(values)
                        fetch(`/api/Account/RegisterConfirm?model=${JSON.stringify(values)}`, { method: 'Post' })
                        this.setState({ status: true })
                        setTimeout(() => {
                            setSubmitting(false)
                            this.setState({ status: false })
                        }, 3000);
                        values.Email = "";
                        values.Password = "";
                        values.RePassword = "";
                    }}
                    validationSchema={Yup.object().shape({
                        Email: Yup.string().required("Required!!"),
                        Password: Yup.string().required("Required!!"),
                        RePassword: Yup.string().required("Required!!")
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

                            <div className="col-md-4 col-md-offset-4 ShadowOut">
                                {this.state.status
                                    ? < MessageModal Header="Register Form" Message="Register Succefully." />
                                    : null
                                }
                                <form className="FormSubmit" onSubmit={handleSubmit}>
                                    <h3 className="text-center">Register Form</h3>
                                    <hr/>
                                    <div className="form-Group">
                                        <label>Email</label>
                                        <input
                                            id="Email"
                                            placeholder="Enter Your Email"
                                            type="text"
                                            value={values.Email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.Email && touched.Email
                                                ? "form-control error"
                                                : "form-control"
                                            }
                                        />
                                        {errors.Email && touched.Email && (<div className="input-feedback">{errors.Email}</div>)}
                                    </div>
                                    <div className="form-Group">
                                        <label>Password</label>
                                        <input
                                            id="Password"
                                            placeholder="Enter Your Password"
                                            type="text"
                                            value={values.Password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.Password && touched.Password
                                                ? "form-control error"
                                                : "form-control"
                                            }
                                        />
                                        {errors.Password && touched.Password && (<div className="input-feedback">{errors.Password}</div>)}
                                    </div>
                                    <div className="form-Group">
                                        <label>RePassword</label>
                                        <input
                                            id="RePassword"
                                            placeholder="Enter Password Again"
                                            type="text"
                                            value={values.RePassword}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.RePassword && touched.RePassword
                                                ? "form-control error"
                                                : "form-control"
                                            }
                                        />
                                        {errors.RePassword && touched.RePassword && (<div className="input-feedback">{errors.RePassword}</div>)}
                                    </div>
                                    <div className="form-Group">
                                        <button type="submit"
                                            disabled={isSubmitting}
                                            className="btn btn-primary btn-block"> submit </button>
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

