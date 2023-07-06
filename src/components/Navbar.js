import React from 'react';
import { ReactPropTypes } from 'react';
import { Link} from "react-router-dom";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

/**
 * 
 */
const Navbar = (props) => {
    return <div>
        <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/TextForm">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About Us</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
        <div className="d-flex">
         <div className="bg-primary rounded mx-2"onClick={()=>{props.toggleMode('primary')}} style={{height:'30px', width:'30px',cursor:'pointer'}}>
         </div>
         </div>
         <div className="d-flex">
         <div className="bg-danger rounded mx-2"onClick={()=>{props.toggleMode('danger')}}style={{height:'30px', width:'30px',cursor:'pointer'}}>         
         </div>
        </div>
        <div className="d-flex">
         <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}}style={{height:'30px', width:'30px',cursor:'pointer'}}>         
         </div>
        </div>
        <div className="d-flex">
         <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}}style={{height:'30px', width:'30px',cursor:'pointer',border:'1px solid black'}}>         
         </div>
        </div>
        <div className="d-flex">
         <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}}style={{height:'30px', width:'30px',cursor:'pointer',border:'1px solid white'}}>         
         </div>
        </div>
      {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode}role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div> */}
    </div>
  </div>
</nav>
    </div>;
}

// #endregion

export default Navbar;
