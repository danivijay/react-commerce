import React, { Fragment } from 'react';
import './cart.scss';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Formik } from 'formik';

const LOGIN_MUTATION = gql`
    mutation LoginMutation($userName: String!, $password: String!) {
        login(userName: $userName, password: $password) {
            userName
            password
        }
    }
`;

const SIGNUP_MUTATION = gql`
    mutation Createuser(
        $userName: String!
        $password: String!
        $email: String!
    ) {
        user(userName: $userName, password: $password, email: $email) {
            userName
            email
            password
        }
    }
`;

const Login = () => {
    return (
        <div className="grid">
            <div className="grid__item grid__item--sm-span-6">
                <h1>Login</h1>
                <Formik
                    initialValues={{ userName: '', password: '' }}
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
                        values: { userName, password },
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
                            variables={{ userName, password }}
                            // onCompleted={(data) => this._confirm(data)}
                            onCompleted={(data) => {
                                if (
                                    data.login.userName === 'admin' &&
                                    data.login.password === 'ecart'
                                ) {
                                    console.log('Login:', 'Successful');
                                    window.location = '/admin';
                                }
                            }}
                        >
                            {(mutation) => (
                                <Fragment>
                                    <input
                                        className="input1"
                                        type="text"
                                        name="userName"
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
                <Formik
                    initialValues={{ userName: '', password: '', email: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log('submitted values::', values);
                    }}
                >
                    {({
                        values: { userName, password, email },
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <Mutation
                            mutation={SIGNUP_MUTATION}
                            variables={{ userName, password, email }}
                            onCompleted={(data) => console.log('Data:', data)}
                        >
                            {(mutation) => (
                                <Fragment>
                                    <input
                                        className="input1"
                                        type="text"
                                        name="userName"
                                        placeholder="Name"
                                        onChange={handleChange}
                                    />
                                    <input
                                        className="input1"
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        onChange={handleChange}
                                    />
                                    <input
                                        className="input1"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        onChange={handleChange}
                                    />
                                    <input
                                        className="input1"
                                        type="password"
                                        name="password2"
                                        placeholder="Confirm Password"
                                        onChange={handleChange}
                                    />
                                    <button className="btn1" onClick={mutation}>
                                        Signup
                                    </button>
                                </Fragment>
                            )}
                        </Mutation>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Login;
