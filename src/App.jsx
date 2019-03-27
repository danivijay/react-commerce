import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Cart from './Cart';
import Footer from './Footer';
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
