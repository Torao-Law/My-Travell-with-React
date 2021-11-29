import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Home from './Component/pages/Home';
import Service from './Component/pages/Service';
import Product from './Component/pages/Product';
import SignUp from './Component/pages/SignUp';

function App() {
  return (
    <>
      <Router>
          <Route path='/' exact component={Home} />
          <Route path="/service" component={Service} />
          <Route path="/product" component={Product} />
          <Route path="/sign-up" component={SignUp} />
      </Router>
    </>
  );
}

export default App;
