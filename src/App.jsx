import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import logo from './logo.svg';
class App extends Component {
      render() {
            return (
                  <div className="App">
                        <Router>
                              <switch>
                                    <Route path="/" exact component={Home} />
                              </switch>
                        </Router>
                  </div>
            );
      }
}

export default App;
