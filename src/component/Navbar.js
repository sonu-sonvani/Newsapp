import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function() {

    return (
      <>
      {/* <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/general">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li> */}
        {/* <li className="nav-item dropdown">
          <LinkclassName="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </LinkclassName=>
          <ul className="dropdown-menu">
            <li><LinkclassName="dropdown-item" to="/">Action</LinkclassName=></li>
            <li><LinkclassName="dropdown-item" to="/">Another action</LinkclassName=></li>
            <li><hr className="dropdown-divider"/></li>
            <li><LinkclassName="dropdown-item" to="/">Something else here</LinkclassName=></li>
          </ul>
        </li>
        <li className="nav-item">
          <LinkclassName="nav-link disabled">Disabled</LinkclassName=>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      {/* </ul>
    </div>
  </div>
</nav> */}
<div class="topnav">
   <a className="nav-item">
          <Link className="active" to="/">Home</Link>
        </a>
    
        <a className="nav-item">
          <Link className="nav-link" to="/general">General</Link>
        </a>
        <a className="nav-item">
          <Link className="nav-link" to="/business">Business</Link>
        </a>
        <a className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </a>
        <a className="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
        </a>
        <a className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
        </a>
        <a className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
        </a>
        <a className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </a>
   </div>
      </>
    )
  
}
