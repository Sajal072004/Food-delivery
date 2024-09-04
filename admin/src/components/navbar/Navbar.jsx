import React from 'react'
import "./navbar.css"
import { assets } from '../../assets/assets'
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="" />
      <FaUser></FaUser>
    </div>
  )
}

export default Navbar