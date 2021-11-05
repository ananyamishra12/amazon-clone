import React from 'react'
import "./subtotal.css"
import CurrencyFormat from 'react-currency-format';
import useStateValue from './StateProvider';
import { getBasketTotal } from './reducer';
function Subtotal() {
    const [{basket}, dispatch]= useStateValue();
    return (
        <div className="subtotal">
            <h1>Subtotal</h1>
            <CurrencyFormat 
                renderText = {
                    (value) =>(
                        <div>
                            <p>
                                Subtotal ({basket.length} items): <strong> {value}</strong>
                            </p>
                        </div>
                    )
                }
                decimalScale={3}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator= {true}
                prefix= {"₹"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
