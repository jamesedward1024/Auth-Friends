import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import Login from "./components/Login"
import FriendList from "./components/FriendList"
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        <Link to='/protected'>Protected Page</Link>

        <Switch>
          <PrivateRoute path="/protected" friends={friends} setFriends={setFriends} component={FriendList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
