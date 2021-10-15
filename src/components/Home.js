import React from 'react'
import "./Home.css"
import "./Product"
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src="https://m.media-amazon.com/images/I/71X3JrrpPwL._SX3000_.jpg" href="banner image"></img>

            <Product
            id = "1"
            title = "ear buds"
            price = {900}
            rating= {4}
            image="https://m.media-amazon.com/images/I/31LC-FBgpBL._AC_SY200_.jpg" />
        </div>
    )
}

export default Home
