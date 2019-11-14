
import React from 'react';

import {
  Route,
  Link,
  NavLink
} from "react-router-dom";



function Home(props) {

  console.log(props.routes)

  return (
    <div>
      <div className="top-box">
        <div className="top-menu">
          <div><Link to="/user" style={{textDecoration:'none', color: 'white'}}>用户</Link></div>
          <div>网易云音乐</div>
          <div><Link to="/search" style={{textDecoration:'none', color: 'white'}}>搜索</Link></div>
        </div>
        <div className="main-menu">
          <div><NavLink to="/index/recommand" style={{textDecoration:'none', color: 'white'}}>推荐</NavLink></div>
          <div><NavLink to="/index/singer" style={{textDecoration:'none', color: 'white'}}>歌手</NavLink></div>
          <div><NavLink to="/index/rank" style={{textDecoration:'none', color: 'white'}}>排行榜</NavLink></div>
        </div>
      </div>
 
      <div className="content">
        
        {props.routes.map((item,index)=>{
          return (
          <Route 
            key={index} 
            exact={item.exact} 
            path={item.path} 
            component={item.component}
            render={item.render}
          />)
          })
        }

      </div>
    </div>
  )
}

export default Home;



