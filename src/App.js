import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const axios = require('axios')

function App() {

  useEffect(() => {
    axios.get('https://covid19api.com/')
        .then( (response) =>
            console.log(response)
        )
  });

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
      </header>
    </div>
  );
}

export default App;
