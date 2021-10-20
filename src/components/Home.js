import React from 'react'
import "./Home.css"
import "./Product"
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src="https://m.media-amazon.com/images/I/71X3JrrpPwL._SX3000_.jpg" href="banner image" />
            <div className="home__row">
                <Product
                id = "1"
                title = "boAt Airdopes 441 TWS Ear-Buds with IWP Technology, Immersive Audio, Up to 30H Total Playback, IPX7 Water Resistance, Super Touch Controls, Secure Sports Fit & Type-C Port(Active Black)"
                price = {900}
                rating= {4}
                image="https://m.media-amazon.com/images/I/31LC-FBgpBL._AC_SY200_.jpg" />
                <Product
                id = "1"
                title = "boAt Airdopes 441 TWS Ear-Buds with IWP Technology, Immersive Audio, Up to 30H Total Playback, IPX7 Water Resistance, Super Touch Controls, Secure Sports Fit & Type-C Port(Active Black)"
                price = {900}
                rating= {4}
                image="https://m.media-amazon.com/images/I/31LC-FBgpBL._AC_SY200_.jpg" />
            </div>
            
        </div>
    )
}

export default Home
