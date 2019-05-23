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
        $userType: String!
    ) {
        user(
            userName: $userName
            password: $password
            email: $email
            userType: $userType
        ) {
            userName
            email
            password
            userType
        }
    }
`;

function parseJWT(token) {
    if (!token) {
        return;
    }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}

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
                        // CUR_USER = values.userName;

                        // localStorage.setItem('CUR_USER', CUR_USER);
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
                            variables={{
                                userName,
                                password,
                            }}
                            // onCompleted={(data) => this._confirm(data)}
                            onCompleted={(data) => {
                                console.log('Data==>', data);
                                if (data.login.userName === 'success::true') {
                                    console.log('Login:', 'Successful');

                                    if (localStorage.getItem('AUTH_TOKEN'))
                                        localStorage.removeItem('AUTH_TOKEN');

                                    localStorage.setItem(
                                        'AUTH_TOKEN',
                                        data.login.password,
                                    );

                                    var tokendata = parseJWT(
                                        data.login.password,
                                    );
                                    console.log('JWT DATA ==== >>', tokendata);

                                    if (localStorage.getItem('CUR_USERNAME'))
                                        localStorage.removeItem('CUR_USERNAME');

                                    if (localStorage.getItem('CUR_USER'))
                                        localStorage.removeItem('CUR_USER');

                                    localStorage.setItem(
                                        'CUR_USERNAME',
                                        tokendata.userName,
                                    );
                                    localStorage.setItem(
                                        'CUR_USER',
                                        tokendata.user_id,
                                    );

                                    console.log(
                                        'retrievedtoken:',
                                        localStorage.getItem('AUTH_TOKEN'),
                                    );

                                    if (tokendata.userType === 'admin')
                                        window.location = '/admin';
                                    else window.location = '/';
                                } else {
                                    window.alert(
                                        'Incorrect username or password',
                                    );
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
                            variables={{
                                userName,
                                password,
                                email,
                                userType: 'buyer',
                            }}
                            onCompleted={(data) => {
                                console.log('Data:', data);

                                window.alert('Sign up Successful');
                                window.location = '/login-signup';
                            }}
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
