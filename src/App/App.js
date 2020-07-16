import React from 'react';
import 'materialize-css';
import './App.scss';
import Navbar from '../components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <button className="btn btn-danger">Bootstrap Button</button>
      <h1>Materialize Css</h1>
      

    </div>
  );
}

export default App;

