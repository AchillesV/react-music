import React from 'react'
import './recommand.scss'


class Recommand extends React.Component {
  constructor(){
    super();
    this.state = {
        imgs:[
            './../assets/images/1.jpg',
            './../assets/images/2.jpg',
            './../assets/images/3.jpg',
            './../assets/images/4.jpg',
            './../assets/images/5.jpg'
           ],   // 图片数组
      showIndex: 0, //显示第几个图片
      timer: null,  // 定时器
      show: false   // 前后按钮显示
    }
  }

  
  componentDidMount(){ //一开始自动播放
    this.start();
}
componentWillUnmount() { //销毁前清除定时器
    this.stop();
}

  stop = () => { //暂停
    let {timer} = this.state;
    clearInterval(timer);
  }
  start = () => { //开始
    let {timer} = this.state;
    timer = setInterval(() => {
        this.next();
    }, 2000);
    this.setState({
        timer
    })
  }
  change = (index) => { //点击下面的按钮切换当前显示的图片
    let {showIndex} = this.state;
    showIndex = index;
    this.setState({
        showIndex
    })
  }
  previous = () => { //上一张
    // let ev = e || window.event;
    let {showIndex, imgs} = this.state;
    if(showIndex <= 0){
        showIndex = imgs.length - 1;
    }else{
        showIndex --;
    }
    this.setState({
        showIndex
    })
  }
  next = () => { //下一张
    // let ev = e || window.event;
    let {showIndex, imgs} = this.state;
    if(showIndex >= imgs.length - 1){
        showIndex = 0;
    }else{
        showIndex ++;
    }
    this.setState({
        showIndex
    })
  }

  render () {
    return (
      <div>
        <div className="contain" 
          onMouseEnter={()=>{this.stop()}} //鼠标进入停止自动播放
          onMouseLeave={()=>{this.start()}}  //鼠标退出自动播放
        >
          <ul className="ul">
              {
                  this.state.imgs.map((value, index) => {
                      return (
                          <li className={index === this.state.showIndex ? 'show' : ''}
                              key={index} 
                          > 
                              <img src={require('./../assets/images/'+(index+1)+'.jpg')} alt="轮播图" />
                          </li>
                      )
                  })
              }
          </ul>
          <ul className="dots" style={{width: this.state.imgs.length * 20 + 'px'}}> 
            {
                this.state.imgs.map((value, index) => {
                    return (
                        <li key={index}  
                            className={index === this.state.showIndex ? 'active' : ''} 
                            onClick={()=>{this.change(index)}}>
                        </li>)
                })
            }
              
          </ul>
          <div className="control">
              <span className="left"  onClick={(e)=>{this.previous(e)}}>←</span>
              <span className="right" onClick={(e)=>{this.next(e)}}>→</span>
          </div>
        </div>

        <div className="recommand-content">
          <div><h4>推荐歌单</h4></div>
          <div className="songs-list">
            <div className="songs">
              <div className="songs-img">
                <img src={require('../assets/images/109951164329153331.jpg')} alt="" />
                <div className="count">▷2333万</div>
              </div>
              <div className="desc">如果人群太拥挤，就让我用耳机与世界对抗</div>
            </div>
            <div className="songs">
              <div>
                <img src={require('../assets/images/109951164329153331.jpg')} alt="" />
              </div>
              <div className="desc">如果人群太拥挤，就让我用耳机与世界对抗</div>
            </div>
            <div className="songs">
              <div>
                <img src={require('../assets/images/109951164329153331.jpg')} alt="" />
              </div>
              <div className="desc">如果人群太拥挤，就让我用耳机与世界对抗</div>
            </div>
            <div className="songs">
              <div>
                <img src={require('../assets/images/109951164329153331.jpg')} alt="" />
              </div>
              <div className="desc">如果人群太拥挤，就让我用耳机与世界对抗</div>
            </div>
          </div>
        </div>

  
      </div>
    )
  }



}

export default Recommand;