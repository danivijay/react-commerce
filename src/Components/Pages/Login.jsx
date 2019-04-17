import React, { Fragment } from 'react';
import './cart.scss';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Formik } from 'formik';

const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`;

const Login = () => {
    return (
        <div className="grid">
            <div className="grid__item grid__item--sm-span-6">
                <h1>Login</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    // validate={(values) => {
                    //     let errors = {};
                    //     if (!values.email) {
                    //         errors.email = 'Required';
                    //     } else if (
                    //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                    //             values.email,
                    //         )
                    //     ) {
                    //         errors.email = 'Invalid email address';
                    //     }
                    //     return errors;
                    // }}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log('submitted values::', values);
                        // setTimeout(() => {
                        //     alert(JSON.stringify(values, null, 2));
                        //     setSubmitting(false);
                        // }, 400);
                    }}
                >
                    {({
                        values: { email, password },
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <Mutation
                            mutation={LOGIN_MUTATION}
                            variables={{ email, password }}
                            // onCompleted={(data) => this._confirm(data)}
                        >
                            {(mutation) => (
                                <Fragment>
                                    <input
                                        className="input1"
                                        type="text"
                                        name="email"
                                        placeholder="username/Email"
                                        onChange={handleChange}
                                    />
                                    <input
                                        className="input1"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        onChange={handleChange}
                                    />
                                    <button className="btn1" onClick={mutation}>
                                        Login
                                    </button>
                                </Fragment>
                            )}
                        </Mutation>
                    )}
                </Formik>
            </div>
            <div className="grid__item grid__item--sm-span-6">
                <h1>Signup</h1>
                <input
                    className="input1"
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                <input
                    className="input1"
                    type="text"
                    name="name"
                    placeholder="Email"
                />
                <input
                    className="input1"
                    type="text"
                    name="name"
                    placeholder="Password"
                />
                <input
                    className="input1"
                    type="text"
                    name="name"
                    placeholder="Confirm Password"
                />
                <button className="btn1">Signup</button>
            </div>
        </div>
    );
};

export default Login;