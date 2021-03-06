import React from 'react'
import logo from '../images/amazon-logo.png'
import "./Header.css"
import {Link} from 'react-router-dom'
import  useStateValue  from './StateProvider'
import { getAuth } from "firebase/auth";

import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header() {
    const [{basket, user}] = useStateValue();
    const login=()=>{
        if(user){
            getAuth.signOut();
        }
    }
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
            <div className="header__nav">
            
            {/*first link*/}
            
            <Link to={!user && "/login"} className="header__link">
                <div onClick={login} className= "header__option">
                    <span className="header__option__lineOne">Hello {user?.email}</span>
                    <span className="header__option__lineTwo">{user? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>
            

            {/*second link*/}
            
            <Link to="/checkout" className="header__link">
                <div className= "header__option">
                    <span className="header__option__lineOne">Returns</span>
                    <span className="header__option__lineTwo">& Orders</span>
                </div>
            </Link>
            

            {/*third link*/}
            
            <Link to="/login" className="header__link">
                <div className= "header__option">
                    <span className="header__option__lineOne">Your</span>
                    <span className="header__option__lineTwo">Prime</span>
                </div>
            </Link>
            
            </div>
            {/** basket with a number */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon className="header__optionBasketicon"></ShoppingBasketIcon>
                    <span className="header__option__lineTwo header__basketCount" >{basket?.length}</span>
                </div>
            
            </Link>
        </nav>
    )
}

export default Header
