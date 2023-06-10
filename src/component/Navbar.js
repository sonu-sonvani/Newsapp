import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function() {

    return (
      <>

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
