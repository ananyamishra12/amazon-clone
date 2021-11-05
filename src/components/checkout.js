import React from 'react'
import useStateValue from './StateProvider'

function checkout() {
    const [{basket}, dispatch]= useStateValue();
    return (
        <div className= "checkout">
            <img 
                className="checkout__ad"
            />
        </div>
    )
}

export default checkout
