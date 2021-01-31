import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About/About.jsx';
import Landing from './pages/Landing/Landing.jsx';
import Signup from './pages/Signup/Signup.jsx';
import Nav from './components/Nav/Nav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/about" exact component={About}/>
        <Route path="/signup" exact component={Signup}/>
      </Switch>
    </Router>
  );
}

export default App;
