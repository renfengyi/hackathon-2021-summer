import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import './BottomTab.css';

class BottomTab extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return(
            <div className='routes-list'>
                <NavLink className={`tab-item ${this.state.current===1?"tab-active":""}`} to="/Home">
                    <div className="tab-item-icon"><img src={this.state.current===1?"./images/1_active.png":"./images/1.png"} 
                        alt="" width="20px" height="20px" /></div>
                    <div className="tab-item-name">活动</div>
                </NavLink>
                <NavLink className={`tab-item ${this.state.current===2?"tab-active":""}`} to="/Sort">
                    <div className="tab-item-icon"><img src={this.state.current===2?"./images/2_active.png":"./images/2.png"} 
                        alt="" width="20px" height="20px" /></div>
                    <div className="tab-item-name">搜索</div>
                </NavLink>
                <NavLink className={`tab-item ${this.state.current===3?"tab-active":""}`} to="/Surprise">
                    <div className="tab-item-icon-middle"><img src={this.state.current===3?"./images/3_active.png":"./images/3.png"} 
                        alt="" width="39px" height="39px" /></div>
                    <div className="tab-item-name"></div>
                </NavLink>
                <NavLink className={`tab-item ${this.state.current===4?"tab-active":""}`} to="/shopCar">
                    <div className="tab-item-icon"><img src={this.state.current===4?"./images/4_active.png":"./images/4.png"} 
                        alt="" width="20px" height="20px" /></div>
                    <div className="tab-item-name">票据</div>
                </NavLink>
                <NavLink className={`tab-item ${this.state.current===5?"tab-active":""}`} to="/Mine">
                    <div className="tab-item-icon"><img src={this.state.current===5?"./images/5_active.png":"./images/5.png"} 
                        alt="" width="20px" height="20px" /></div>
                    <div className="tab-item-name">我的</div>
                </NavLink>
            </div>
        )
    }
}

export default BottomTab;