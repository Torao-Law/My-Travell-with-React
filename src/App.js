import React from 'react'
import Navbar from './Component/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './Component/pages/home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
          <Routes>
            <Route path="/" exact/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
