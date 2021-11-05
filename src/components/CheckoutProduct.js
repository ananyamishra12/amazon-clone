import React from 'react'
import "./CheckoutProduct.css"
import useStateValue from './StateProvider';
function CheckoutProduct({id, price, image, title, rating}) {
    const [{basket}, dispatch]= useStateValue();
    const removeFromBasket = () => {
        dispatch(
            {
                type:"REMOVE_FROM_BASKET",
                id: id,
            }
        )
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>
            <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
                <p>
                    <small>₹ </small>
                    <strong className="checkoutProduct__price">{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill()
                        .map((_)=>
                        <p>⭐</p>)
                    
                    }
                </div>
                <button className="checkoutProduct__button"
                onClick={removeFromBasket}> Remove from basket</button>                
            </div>
        </div>
    )
}

export default CheckoutProduct
