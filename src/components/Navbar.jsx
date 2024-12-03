import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'
const Navbar = () => {
  
  return (
    <div className="navbar-container">
        <nav>
          <ul>
            <li><NavLink className = {(e) => {return e.isActive ? "red": ""}} to = '/'>Home</NavLink></li>
            <li><NavLink className = {(e) => {return e.isActive ? "red": ""}} to = '/gallary'>Gallary</NavLink></li>
            <li><NavLink className = {(e) => {return e.isActive ? "red": ""}} to = '/video'>Video</NavLink></li>
            <li><NavLink className = {(e) => {return e.isActive ? "red": ""}} to = '/feedback'>Feedback form</NavLink></li>
            <li><NavLink className = {(e) => {return e.isActive ? "red": ""}} to = '/contact'>Contact Us</NavLink></li>
          </ul>
        </nav> 
   </div>
  )
}

export default Navbar
