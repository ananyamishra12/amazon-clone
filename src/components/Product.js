import React from 'react'
import "./Product.css"
function Product({id, title, price, rating, image}) {
    return (
        <div className="product">
            <p>{title}</p>
            <p>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating).fill()
                    .map((_)=>
                    <p>⭐</p>)
                
                }
            </div>
        </div>
    )
}

export default Product
