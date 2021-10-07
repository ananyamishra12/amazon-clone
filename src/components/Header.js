import React from 'react'
import logo from '../images/amazon-logo.png'
import "./Header.css"
import {Link} from 'react-router-dom'
function Header() {
    return (
        <nav className="header">
            <Link to="/">
                {/** amazon logo */}
                <img className="header__logo" src={logo}
                alt="amazon logo"
                />
            </Link>
            
            {/** search bar */}
            <input type="text" className= "header_searchInput"/>

            {/** three links */}
            {/** basket with a number */}
        </nav>
    )
}

export default Header