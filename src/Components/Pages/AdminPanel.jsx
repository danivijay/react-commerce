import React from 'react';
import './AdminPanel.scss';
const AdminPanel = () => {
    return (
        <table id="admintable">
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Quantity</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>Tony Stark</td>
                <td>Stark Industries</td>
                <td>2</td>
                <td>04/18/2019</td>
                <td>56</td>
                <td>Success</td>
            </tr>
            <tr>
                <td>Sherlock Holmes</td>
                <td>221B Baker Street</td>
                <td>1</td>
                <td>04/17/2019</td>
                <td>28</td>
                <td>Success</td>
            </tr>
            <tr>
                <td>Bruce Wayne</td>
                <td>Gotham City</td>
                <td>3</td>
                <td>04/09/2019</td>
                <td>84</td>
                <td>Failed</td>
            </tr>
            <tr>
                <td>Dexter Morgan</td>
                <td>Miami</td>
                <td>1</td>
                <td>04/18/2019</td>
                <td>28</td>
                <td>Success</td>
            </tr>
            <tr>
                <td>Bruce Wayne</td>
                <td>Gotham City</td>
                <td>3</td>
                <td>04/09/2019</td>
                <td>84</td>
                <td>Failed</td>
            </tr>
        </table>
    );
};

export default AdminPanel;
