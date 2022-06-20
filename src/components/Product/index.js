import React from "react";
import styles from "./index.module.css";


const Product = ({value}) => {
    return(
        <div className={`${styles.container} space-y-4 text-center rounded-lg shadow-xl justify-items-center cursor-pointer`}>
            <h1 className={`font-bold text-2xl uppercase`}>{value.name}</h1>
            <div>
            {
                Object.values(value.sizes).map((size, index) =>{
                    return(
                        <p key={index} className={`uppercase`}>{size.size} - P{size.price}</p>
                    )
                })
            }
            </div>
            <p>Stock: {value.stock}</p>
        </div>
    )
}

export default Product;