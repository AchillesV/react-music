
import React from 'react';
import Recommand from './Recommand'
import Rank from './Rank'
import Singer from './Singer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";



function Home() {
  return (
    <Router>
      <div className="top-box">
        <div className="top-menu">
          <div><Link to="/user" style={{textDecoration:'none', color: 'white'}}>用户</Link></div>
          <div>网易云音乐</div>
          <div><Link to="/search" style={{textDecoration:'none', color: 'white'}}>搜索</Link></div>
        </div>
        <div className="main-menu">
          <div><Link to="/recommand" style={{textDecoration:'none', color: 'white'}}>推荐</Link></div>
          <div><Link to="/singer" style={{textDecoration:'none', color: 'white'}}>歌手</Link></div>
          <div><Link to="/rank" style={{textDecoration:'none', color: 'white'}}>排行榜</Link></div>
        </div>
      </div>

      <div className="content">
        <Switch>
          <Route path="/recommand" children={<Recommand />} />
          <Route path="/singer" children={<Singer />} />
          <Route path="/rank" children={<Rank />} />
        </Switch>

      </div>
    </Router>
  )
}

export default Home;



