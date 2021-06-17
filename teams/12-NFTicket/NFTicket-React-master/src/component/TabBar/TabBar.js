import './TabBar.css';
import React from 'react';

export default class Tabbar extends React.Component {
  constructor(){
    super();
    this.state={
      tabs:[
        {tabName:'一',id:'1'},
        {tabName:'二',id:'2'},
        {tabName:'三',id:'3'},
        {tabName:'四',id:'4'},
        {tabName:'五',id:'5'},
      ],
      current:0,
    };
  }

  itemNav = (index) => {
    //在这里就可以取到子组件传来的值
    this.setState({
      current: index,
    })
    switch(index){
        case 1:
            alert("1");
            break;
        case 2:
            alert("2");
            break;
        case 3:
            alert("3");
            break;
        case 4:
            alert("4");
            break;
        case 5:
            alert("5");
            break;
    }
  }

  render() {
    return (
        <div className="tabGroup">
           <div className={`tab-item ${this.state.current===1?"tab-active":""}`}  onClick={ () => { this.itemNav(1)} }>
              <div className="tab-item-icon"><img src={this.state.current===1?"./images/1_active.png":"./images/1.png"} 
              alt="" width="20px" height="20px" /></div>
              <div className="tab-item-name">一</div>
           </div>
           <div className={`tab-item ${this.state.current===2?"tab-active":""}`}  onClick={ () => { this.itemNav(2)} }>
              <div className="tab-item-icon"><img src={this.state.current===2?"./images/2_active.png":"./images/2.png"} 
              alt="" width="20px" height="20px" /></div>
              <div className="tab-item-name">二</div>
           </div>
           <div className={`tab-item-middle ${this.state.current===3?"tab-active":""}`}  onClick={ () => { this.itemNav(3)} }>
              <div className="tab-item-icon-middle"><img src={this.state.current===3?"./images/3_active.png":"./images/3.png"} 
              alt="" width="39px" height="39px" /></div>
              <div className="tab-item-name"></div>
           </div>
           <div className={`tab-item ${this.state.current===4?"tab-active":""}`}  onClick={ () => { this.itemNav(4)} }>
              <div className="tab-item-icon"><img src={this.state.current===4?"./images/4_active.png":"./images/4.png"} 
              alt="" width="20px" height="20px" /></div>
              <div className="tab-item-name">四</div>
           </div>
           <div className={`tab-item ${this.state.current===5?"tab-active":""}`}  onClick={ () => { this.itemNav(5)} }>
              <div className="tab-item-icon"><img src={this.state.current===5?"./images/5_active.png":"./images/5.png"} 
              alt="" width="20px" height="20px" /></div>
              <div className="tab-item-name">五</div>
           </div>
        </div>
    );
  }
}