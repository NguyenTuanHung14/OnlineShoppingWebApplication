import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import './App.css';


const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <section className="container">
        <Route exact path='/' component={Landing} />
        <switch>
          <Route exact path='/dangky' component={Register} />
          <Route exact path='/dangnhap' component={Login} />
        </switch>
      </section>
    </Fragment>
  </Router>
)

export default App
