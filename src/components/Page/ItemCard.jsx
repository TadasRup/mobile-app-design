import React from 'react';
import style from '../css/ProductCatalog.module.css'
import { useCart } from "react-use-ract"

const ItemCard = (props) => {
const { addItem} = useCart();

    return (
        <div class={style.Itemdiv}>
            <div>
                <img className={style.itemimg} src={props.img}/>
                    <div className={style.item}>
                        <h5 class={style.cardtitle}>{props.title}</h5>
                        <h5 class={style.cardtext}>$ {props.price}</h5>
                        <p class={style.cardtext}>{props.desc}</p>
                        <button href="#" class={style.btnprimary}
                         onClick={() => addItem(props.item)}>Add to cart</button>
                    </div>
                </div>
            </div>
        );
    }; 

export default ItemCard;