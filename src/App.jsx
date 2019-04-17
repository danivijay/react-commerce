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

const cache = new InMemoryCache();

const httpLink = new HttpLink({
    uri: `http://localhost:4000/graphql`,
    // headers: {
    //   authorization: `Bearer ${
    //     process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    //   }`,
    // },
});

const client = new ApolloClient({
    link: httpLink,
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
