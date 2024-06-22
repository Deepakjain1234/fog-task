
import React from 'react';
import '../styles/Sidebar.css';
import logo from '../asset/image/logo.png'
import homeLogo from '../asset/logo/home.png'
import trend from '../asset/logo/trend.png'
import library from '../asset/logo/library.png'
import discover from '../asset/logo/discover.png'
import setting from '../asset/logo/setting.png'
import logout from '../asset/logo/logout.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <img src={logo} alt="" style={{height:45,marginLeft:23}} />
      </div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'85vh',marginLeft:23 }}>
      <div className="menu">
        <p style={{fontSize:11}}>MENU</p>
        <ul>
          <div style={{display:'flex' ,alignItems:'center' }}> <img  style={{height:20,width:20 ,marginRight:15}} src={homeLogo} alt="" /><li>Home</li></div>
          <div style={{display:'flex' ,alignItems:'center'}}> <img  style={{height:20 ,width:20 ,marginRight:15}} src={trend} alt="" /><li>Trends</li></div>
          <div style={{display:'flex' ,alignItems:'center'}}> <img  style={{height:20 ,width:20 ,marginRight:15}} src={library} alt="" /><li>Library</li></div>
          <div style={{display:'flex' ,alignItems:'center'}}> <img  style={{height:20 ,width:20 ,marginRight:15}} src={discover} alt="" /><li>Discover</li></div>
          
        </ul>
      </div>
      <div className="general">
        <p style={{fontSize:11}}>GENERAL</p>
        <ul>
        <div style={{display:'flex' ,alignItems:'center'}}> <img  style={{height:20 ,width:20 ,marginRight:15}} src={setting} alt="" /><li>Settings</li></div>
        <div style={{display:'flex' ,alignItems:'center'}}> <img  style={{height:20 ,width:20 ,marginRight:15}} src={logout} alt="" /><li>Log out</li></div>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
