import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Common/Navbar';
import Home from './Components/Pages/Home';
import Cart from './Components/Pages/Cart';
import Footer from './Components/Common/Footer';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import Login from './Components/Pages/Login';
import AdminPanel from './Components/Pages/AdminPanel';
import AddorEdit from './Components/Pages/AddorEdit';
import { setContext } from 'apollo-link-context';

const cache = new InMemoryCache();
const token = localStorage.getItem('AUTH_TOKEN');
const httpLink = new HttpLink({
    uri: `http://localhost:4000/graphql`,
    headers: {
        authorization: `${token}`,
    },
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div className="App">
                    <div className="wrapper">
                        <Navbar />
                        <Router>
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/cart" exact component={Cart} />
                                <Route path="/login" exact component={Login} />
                                <Route
                                    path="/admin"
                                    exact
                                    component={AdminPanel}
                                />
                                <Route
                                    path="/addoredit"
                                    exact
                                    component={AddorEdit}
                                />
                            </Switch>
                        </Router>
                    </div>
                    <Footer />
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
