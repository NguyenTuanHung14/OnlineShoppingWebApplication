import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Landing from './containers/landingPage/Landing';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/dangky' component={Register} />
        <Route exact path='/dangnhap' component={Login} />
      </Switch>
      <Footer />
    </Fragment>
  </Router>
);

export default App;
