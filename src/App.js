import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from "./Components/Portals/Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalToggle:false
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>Portals</h1>
          <button onClick={()=>this.setState({modalToggle:!this.state.modalToggle})}>Toggle Modal</button>
          <Modal isOpen={this.state.modalToggle}>
            <div>
              Modal is open!
            </div>
          </Modal>
        </header>
      </div>
    );
  }
}

export default App;
