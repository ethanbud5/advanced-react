import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from "./Components/Portals/Modal";
import ErrorBoundary from './Components/ErrorBoundaries/ErrorBoundary';
import FragmentComponent from './Components/FragmentComponent/FragmentComponent';

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
      <ErrorBoundary>
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
          <h1>Fragments</h1>
          <FragmentComponent/>
        </header>
      </ErrorBoundary>
      </div>
    );
  }
}

export default App;
