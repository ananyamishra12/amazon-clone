import React from 'react'
import logo from '../images/amazon-logo.png'
import "./Header.css"
import {Link} from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search';
function Header() {
    return (
        <nav className="header">
            <Link to="/"> {/*we use the link tag instead of using href because using <link /> we dont have to refresh the page. */}
                {/** amazon logo */}
                <img className="header__logo" src={logo}
                alt="amazon logo"
                />
            </Link>
                    
            {/** search bar */}
            <div className="header__search">
               <input type="text" className= "header__searchInput"/>
               <SearchIcon className="header__searchIcon"/> {/*here material ui has been imported */}
            </div>
            
            {/** three links */}
            <div className= "header__nav">

            </div>
            {/** basket with a number */}
        </nav>
    )
}

export default Header