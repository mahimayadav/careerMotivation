import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from './components/NoMatch';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Service from './components/Services';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/service" component={Service}></Route>
          <Redirect component={NoMatch}></Redirect>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
