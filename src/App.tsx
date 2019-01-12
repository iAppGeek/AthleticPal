import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import {Button, Jumbotron} from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader />

          <Jumbotron>
              <h1>Hello, world!</h1>
              <p>
                  This is a simple hero unit, a simple jumbotron-style component for calling
                  extra attention to featured content or information.
              </p>
              <p>
                  <Button bsStyle="primary">Learn more</Button>
              </p>
          </Jumbotron>

        <PageFooter />
      </div>
    );
  }
}

export default App;