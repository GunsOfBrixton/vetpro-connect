import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Admin from './components/Admin/Admin';
import './App.css';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/admin" exact element={<Admin/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
