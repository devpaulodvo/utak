import React from "react";
import styles from "./index.module.css";

const Navbar = ({changePage}) => {
    return(
        <div className={`${styles.container} self-start gap-6 justify-center items-center font-mono`}>
            <div className={`${styles.options}`} onClick={()=>{
                changePage(1);
            }}>
                Products
            </div>
            <div className={`${styles.options}`} onClick={()=>{
                changePage(2);
            }}>
                Add Products
            </div>
        </div>
    )
}

export default Navbar;