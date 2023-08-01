import React from 'react';
import ItemCard from './ItemCard';
import style from '../css/ProductCatalog.module.css'
import data from './data'
import Cart from './Cart';

const ProductCatalog = () => {

    return (
        <div>
            <h1 className={style.itemdiv}>All items</h1>
            <section>
                <div class>
                    {data.productData.map((item, index)=>{
                        return(
                            <ItemCard 
                            img={item.img} 
                            title={item.title} 
                            desc={item.desc} 
                            price={item.price} 
                            item={item} 
                            key={index}/>
                        )
                    })}
                <Cart />
                </div>
            </section>
        </div>
    )
}

export default ProductCatalog;