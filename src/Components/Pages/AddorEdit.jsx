import React, { Fragment } from 'react';
import './cart.scss';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Formik } from 'formik';

const PRODUCT_MUTATION = gql`
    mutation Createproduct($name: String!, $price: Int!, $stock: Int!) {
        product(name: $name, price: $price, stock: $stock) {
            id
            name
            price
            stock
        }
    }
`;

const AddorEdit = () => {
    return (
        <div>
            <h1>Add/Edit Product</h1>
            <Formik
                initialValues={{ name: '', price: 0, stock: 0 }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('submitted values::', values);
                }}
            >
                {({
                    values: { name, price, stock },
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <Mutation
                        mutation={PRODUCT_MUTATION}
                        variables={{ name, price, stock }}
                        // onCompleted={(data) => this._confirm(data)}
                        // onCompleted={(data) => console.log('data::', data)}
                        onCompleted={(data) =>
                            window.alert('Product has been added successfully')
                        }
                    >
                        {(mutation) => (
                            <Fragment>
                                <input
                                    className="input1"
                                    type="text"
                                    name="name"
                                    placeholder="Product Name"
                                    onChange={handleChange}
                                />
                                <input
                                    className="input1"
                                    type="number"
                                    name="price"
                                    placeholder="Price"
                                    onChange={handleChange}
                                />
                                <input
                                    className="input1"
                                    type="number"
                                    name="stock"
                                    placeholder="stock"
                                    onChange={handleChange}
                                />
                                <button className="btn1" onClick={mutation}>
                                    Add Product
                                </button>
                            </Fragment>
                        )}
                    </Mutation>
                )}
            </Formik>
        </div>
    );
};

export default AddorEdit;
