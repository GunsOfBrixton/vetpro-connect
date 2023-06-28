import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Admin from './components/Admin/Admin';
import User from './components/User/User';
import './App.css';
import Registro from './components/Admin/Registro/Registro';
import Login from './components/Admin/Login';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/admin" exact element={<Admin/>}/>
        <Route path="/user" exact element={<User/>}/>
        <Route path="/registro" exact element={<Registro/>}/>
        <Route path="/login" exact element={<Login/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
