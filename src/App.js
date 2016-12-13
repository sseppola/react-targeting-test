import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Target from './Target.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Targeting demo</h2>
        </div>

        <div style={{ textAlign: 'left' }}>
          <p>The goal of the targeting system is to pick the element that is hovered by the user. <br/> Because only 1 target should exist, which is not the case with nested elements this becomes more complicated.</p>
          <p style={{ marginTop: 20 }}>Rules:</p>
          <ul>
            <li>Only 1 element can be be the target at one time</li>
            <li>Only elements that have opted in to be considered a target can be the target</li>
            <li>In the case of two nested targets, both hovered, the targeting system should only select the target that is deepest.</li>
          </ul>
        </div>

        <h3 style={{ marginTop: 50 }}>Test area:</h3>
        <div>
          <Target name="nr1">
            <p>TARGET 1</p>
            <Target name="nr2">
              <p>TARGET 2</p>
              <Target name="nr3">
                <p>TARGET 3</p>
              </Target>
            </Target>
          </Target>
        </div>
      </div>
    );
  }
}

export default App;
