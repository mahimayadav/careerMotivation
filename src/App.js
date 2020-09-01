import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from "./components/Home";
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Login from './components/Authentication/Login';
import QuesAns from './components/Pages/Ques&Ans/QuesAns';
import WriteReview from './components/Pages/Videos/Videos';
import Colleges from './components/Pages/TopColleges/Colleges';
import Courses from './components/Pages/Courses/Courses';
import Review from './components/Pages/Review/Review';
import Videos from './components/Pages/Videos/Videos'
import Register from './components/Authentication/Register';
import ForgotPassword from './components/Authentication/ForgotPassword';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/forgotpassword" component={ForgotPassword}></Route>
          <Route exact path="/review" component={Review}></Route>
          <Route exact path="/courses" component={Courses}></Route>
          <Route exact path="/colleges" component={Colleges}></Route>
          <Route exact path="/writereview" component={WriteReview}></Route>
          <Route exact path="/videos" component={Videos}></Route>
          <Route exact path="/queAns" component={QuesAns}></Route>
          <Redirect component={NoMatch}></Redirect>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
