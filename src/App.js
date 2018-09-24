import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import classes from './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className={classes.Main}>
        <Layout/>
        </div>
      </Router>

    );
  }
}

export default App;
