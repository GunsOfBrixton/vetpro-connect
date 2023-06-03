import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContainerUno from './components/ContainerUno/ContainerUno';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ContainerUno/>
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>     
    </>
  );
}

export default App;
