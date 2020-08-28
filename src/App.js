import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from './components/NoMatch';
import Engineering from './components/Engineering/Engineering';
import Navbar from './components/Navbar';
import Service from './components/Services';
import Medical from './components/Medical/Medical';
import Management from './components/Management/Management';
import Header from './components/Header';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/engineering" component={Engineering}></Route>
          <Route exact path="/Medical" component={Medical}></Route>
          <Route exact path="/management" component={Management}></Route>
          <Route exact path="/service" component={Service}></Route>
          <Redirect component={NoMatch}></Redirect>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
