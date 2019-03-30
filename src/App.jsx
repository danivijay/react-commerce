import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Common/Navbar';
import Home from './Components/Pages/Home';
import Cart from './Components/Pages/Cart';
import Footer from './Components/Common/Footer';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Router>
                    <switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/cart" exact component={Cart} />
                    </switch>
                </Router>
                <Footer />
            </div>
        );
    }
}

export default App;
