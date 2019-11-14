import React from 'react';
import Home from './components/Home';
import Search from './components/Search';
import User from './components/User';

import Recommand from './components/Recommand';
import Rank from './components/Rank';
import Singer from './components/Singer';
import './App.scss';

import { Redirect } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom";

function App(props) {
  let routes = [
    { path: '/index',
      component: Home,
      routes : [
         {
          path: '/index',
          exact: true,
          render: () => <Redirect to={"/index/recommend"} />
        }, 
        {
          path: '/index/recommand',
          component: Recommand
        },
        {
          path: '/index/rank',
          component: Rank
        },
        {
          path: '/index/singer',
          component: Singer
        },
      ]
    },
    {
      path: '/search',
      component: Search,
      exact: true,
    },
    {
      path: '/user',
      component: User,
      exact: true,
    },
    
  ]
  return (
    <Router>
      <div className="App">
        <Switch>
          {routes.map((route,i)=>(
            <Route
              key={route.kay||i}
              path={route.path}
              exact={route.exact}
              render={props=>(
                <route.component  {...props} routes={route.routes} />
              )}
            />
          ))}

{/*           <Route exact path="/" children={<Home />} />
          <Route path="/search" children={<Search />} />
          <Route path="/user" children={<User />} /> */}
        </Switch>
      </div>
    </Router>
  );
}



export default App;
