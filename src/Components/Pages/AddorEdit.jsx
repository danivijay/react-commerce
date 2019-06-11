import React, { Fragment } from 'react';
import './cart.scss';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Formik } from 'formik';

// const PRODUCT_MUTATION = gql`
//     mutation Createproduct(
//         $name: String!
//         $price: Int!
//         $stock: Int!
//         $owner_user_id: String!
//     ) {
//         product(
//             name: $name
//             price: $price
//             stock: $stock
//             owner_user_id: $owner_user_id
//         ) {
//             id
//             name
//             price
//             stock
//             owner_user_id
//         }
//     }
// `;

const PRODUCT_MUTATION = gql`
    mutation Createproduct(
        $name: String!
        $price: Int!
        $stock: Int!
        $owner_user_id: String!
        $edit_mode: String!
    ) {
        product(
            name: $name
            price: $price
            stock: $stock
            owner_user_id: $owner_user_id
            edit_mode: $edit_mode
        ) {
            id
            name
            price
            stock
            owner_user_id
        }
    }
`;

const uid = localStorage.getItem('CUR_USER');

const edit_mode_variable = localStorage.getItem('EDIT_MODE');

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
                        variables={{
                            name,
                            price,
                            stock,
                            owner_user_id: uid,
                            edit_mode: edit_mode_variable,
                        }}
                        // onCompleted={(data) => this._confirm(data)}
                        // onCompleted={(data) => console.log('data::', data)}
                        onCompleted={(data) => {
                            if (localStorage.getItem('EDIT_MODE') !== 'false')
                                window.alert(
                                    'Product has been updated successfully',
                                );
                            else
                                window.alert(
                                    'Product has been added successfully',
                                );
                            window.location = '/admin';
                        }}
                    >
                        {(mutation) => (
                            <Fragment>
                                {localStorage.getItem('EDIT_MODE') &&
                                localStorage.getItem('EDIT_MODE') !==
                                    'false' ? (
                                    <Fragment>
                                        <input
                                            className="input1"
                                            type="text"
                                            name="name"
                                            defaultValue={localStorage.getItem(
                                                'PRODUCT_NAME',
                                            )}
                                            placeholder="Product Name"
                                            onChange={handleChange}
                                        />
                                        <input
                                            className="input1"
                                            type="number"
                                            name="price"
                                            defaultValue={localStorage.getItem(
                                                'PRODUCT_PRICE',
                                            )}
                                            placeholder="Price"
                                            onChange={handleChange}
                                        />
                                        <input
                                            className="input1"
                                            type="number"
                                            name="stock"
                                            defaultValue={localStorage.getItem(
                                                'PRODUCT_STOCK',
                                            )}
                                            placeholder="stock"
                                            onChange={handleChange}
                                        />
                                        <button
                                            className="btn1"
                                            onClick={mutation}
                                        >
                                            Add / Edit Product
                                        </button>
                                    </Fragment>
                                ) : (
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
                                        <button
                                            className="btn1"
                                            onClick={mutation}
                                        >
                                            Add / Edit Product
                                        </button>
                                    </Fragment>
                                )}
                            </Fragment>
                        )}
                    </Mutation>
                )}
            </Formik>
        </div>
    );
};

export default AddorEdit;
