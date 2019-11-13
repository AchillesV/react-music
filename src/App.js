import React from 'react';
import Home from './components/Home';
import Search from './components/Search';
import User from './components/User';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom";

function App(props) {


  return (
    <Router>
      <div className="App" >
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route path="/search" children={<Search />} />
          <Route path="/user" children={<User />} />
        </Switch>
      </div>
    </Router>
  );
}



export default App;
