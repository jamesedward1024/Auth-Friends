import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import Login from "./components/Login"
import FriendList from "./components/FriendList"
import PrivateRoute from './components/PrivateRoute'
import FriendForm from './components/FriendForm'

function App() {
  const [friends, setFriends] = useState([])
  return (
    <Router>
      <div className="App">
        <div className="header">
              <Link to="/login">Login</Link>

              <Link to='/protected'>Friend List</Link>


              <Link to="/protectedAdd">Add Friend</Link>
        </div>
        <Switch>
          <PrivateRoute exact path="/protectedAdd" friends={friends} setFriends={setFriends} component={FriendForm} />
          <PrivateRoute exact path="/protected" friends={friends} setFriends={setFriends} component={FriendList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
