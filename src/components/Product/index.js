import React from "react";
import styles from "./index.module.css";

const Product = () => {
    return(
        <div className={`${styles.container} space-y-4 text-center rounded-lg shadow-xl justify-items-center`}>
            {/* <img className={`${styles.productImage}`} src={require("./images/borger.jpg")}/> */}
            <h1 className={`font-bold text-lg uppercase`}>ultimate burger</h1>
            <p className={`font-bold text-3xl uppercase`}>p240</p>
            <div className={`flex flex-col`}>
            <label>Sizes</label>
                <label>
                    Small
                    <input type="radio" name="size"/>
                </label>
                <label>
                    Medium
                    <input type="radio" name="size"/>
                </label>
                <label>
                    Large
                    <input type="radio" name="size"/>
                </label>
            </div>
            <p>Stock: 56</p>
        </div>
    )
}

export default Product;