import React from 'react'
import useStateValue from './StateProvider'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}, dispatch]= useStateValue();
    return (
        <div className= "checkout">
            <img 
                className="checkout__ad" src= "https://easysell.in/wp-content/uploads/2021/05/banner_1_newStore.jpg" href="ad image"
            />
            {basket?.length=== 0 ?(
                <div className="checkout__title">
                    <h2>Your basket is empty.</h2>
                    <p>Please select items and add to basket to view them here.</p>
                </div>
            ): (
                <div className="checkout__title">
                    <h2>Your shopping basket</h2> 
                    {basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        title= {item.title}
                        image= {item.image}
                        price= {item.price}
                        rating= {item.rating}
                        />   
                        ))

                    }
                </div>
            )}
               {basket.length>0 && (
                   <div className="checkout__right">
                       <Subtotal />
                   </div>
               )} 
        </div>
    )
}

export default Checkout;
