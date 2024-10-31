import React from 'react'
import { FaUser } from "react-icons/fa6";
import { FaCartPlus,  } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';



function Header() {
  return (
    <header>
        <div className="logo_container">
          <NavLink to={'/'}>
            <img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home" />
          </NavLink>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
          <FaUser />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
          
            <span className="action_name">Wishlist</span>
          </div>
          <FaHeart />

          <NavLink className="action_container" to={'/bag'}>
          <FaCartPlus />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">0</span>
          </NavLink>
        </div>
      </header>
  )
}

export default Header