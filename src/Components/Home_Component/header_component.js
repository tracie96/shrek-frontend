import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../../assets/img/logo/logo.png';
import Home from './home_component';
import About from '../About_Component/about_us_compnent'
// import "../assets/css/style.css";
import logo from "../../assets/img/logo/logo.png";
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img src={logo}/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto" style={{width:"50%"}}>
      <li style={{paddingLeft:"2%"}}> 
      <Link to="/" className="nav-link nav-item active">Home</Link>
      </li>
      <li style={{paddingLeft:"2%"}}>
      <Link to="/about" className="nav-link nav-item active">About Us</Link>
      </li> 
      <li style={{paddingLeft:"2%"}}>
      <Link to="/books" className="nav-link nav-item active">Book</Link>
      </li> 
      {/* <li style={{paddingLeft:"2%"}}>
      <Link to="/authors" className="nav-link nav-item active">Authors</Link>
      </li>  */}
      <li style={{paddingLeft:"2%"}}>
      <Link to="/createbooks" className="nav-link nav-item active">Create Book</Link>
      </li> 
      <li style={{paddingLeft:"2%"}}>
      <Link to="/managebooks" className="nav-link nav-item active">Manage Book</Link>
      </li> 
    </ul>


    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{height:"50px"}}/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    )
}
