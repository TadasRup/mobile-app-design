import React from 'react';
import {useCart} from "react-use-cart"
import style from "../css/Cart.module.css"

const Cart = () => {
    const {
         isEmpty,
         totalUniqueItems,
         items,
         totalItems,
         cartTotal,
         updateItemQuantity,
         removeItem,
         emptyCart
          } = useCart();
          if(isEmpty) return <h1 className={style.cartempty}>Your Cart is Empty</h1>
    return (
       <section>
            <div>
                <div>
                    <h5>Cart ({totalUniqueItems}) total Items: ({totalItems}) </h5>
                </div>
            </div>
       </section>
        );
    }; 

export default Cart;