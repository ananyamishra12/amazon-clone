import React from 'react'
import logo from '../images/amazon-logo.png'
import "./Header.css"
import {Link} from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search';
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
            div.header
            <input type="text" className= "header_searchInput"/>
            <SearchIcon className="header__searchIcon"/>
            {/** three links */}
            {/** basket with a number */}
        </nav>
    )
}

export default Header