import React from 'react';
import 'materialize-css';
import './App.scss';
import Navbar from '../components/Navbar/Navbar';
import Card from '../components/Card/Card';
import Lists from '../components/Lists/Lists';
import Modals from '../components/Modals/Modals';

function App() {
  return (
    <div className="App">
      <Navbar />
      <button className="btn btn-danger">Bootstrap Button</button>
      <h1>Materialize Css</h1>
      <Card />
      <Lists />
      <Modals />
      

    </div>
  );
}

export default App;

