import React from 'react'
import useStateValue from './StateProvider'
import "./checkout.css";

function Checkout() {
    const [{basket}, dispatch]= useStateValue();
    return (
        <div className= "checkout">
            <img 
                className="checkout__ad" src= "https://easysell.in/wp-content/uploads/2021/05/banner_1_newStore.jpg" href="ad image"
            />
            <h2>hi</h2>
        </div>
    )
}

export default Checkout;
