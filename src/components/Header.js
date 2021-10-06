import React from 'react'
import logo from '../images/amazon-logo.png'
import "./Header.css"
function Header() {
    return (
        <nav className="header">
            {/** amazon logo */}
            <img className="header__logo" src={logo}
            alt="amazon logo"
            />
            
            {/** search bar */}
            {/** three links */}
            {/** basket with a number */}
        </nav>
    )
}

export default Header