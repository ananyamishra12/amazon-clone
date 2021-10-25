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
                id = "2"
                title = "KENT Supreme 2020 (11111), Wall Mountable, RO + UF + TDS Control + UV in Tank, 8 L Tank, White, 20 LPH Water Purifier"
                price = {12,499}
                rating= {5}
                image="https://m.media-amazon.com/images/I/717V+1YgBwL._SL1500_.jpg" />
            </div>

            <div className="home__row">
                <Product
                    id = "3"
                    title = "Bajaj New Shakti Neo 15L Metal Body 4 Star Water Heater with Multiple Safety System, White"
                    price = {5,899}
                    rating= {4}
                    image="https://m.media-amazon.com/images/I/61b3y1KD09S._SL1500_.jpg" />

                    <Product
                    id = "4"
                    title = "HUESLAND by Ahmedabad Cotton Comfort 144 TC Cotton Bedsheet with 2 Pillow Covers - King Size, Beige, Green & Blue"
                    price = {911}
                    rating= {3}
                    image="https://m.media-amazon.com/images/I/71Lrctp8ZRL._SL1280_.jpg" />

                    <Product
                    id = "5"
                    title = "Milton Thermosteel Flip Lid Flask, 500 milliliters, Silver"
                    price = {558}
                    rating= {4}
                    image="https://m.media-amazon.com/images/I/81t4Fl4iFnL._SL1500_.jpg" />
            </div>

            <div className="home__row">
                <Product
                        id = "6"
                        title = "AmazonBasics 109 cm (43 inches) 4K Ultra HD Smart LED Fire TV AB43U20PS (Black)"
                        price = {34,999}
                        rating= {5}
                        image="https://m.media-amazon.com/images/I/71AqQyCMmeL._SL1240_.jpg" />

            </div>
        </div>
    )
}

export default Home
