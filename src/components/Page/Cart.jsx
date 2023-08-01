import React from 'react';
import {useCart} from "react-use-cart"

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
          if(isEmpty) return <h1>Your Cart is Empty</h1>
    return (
       <div>
            
       </div>
        );
    }; 

export default Cart;