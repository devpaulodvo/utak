import React, { useState } from "react";
import styles from "./index.module.css";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Product from "../Product";
import AddProduct from "../AddProduct";

const Dashboard = () => {
    const [navStatus, setNavStatus] = useState(1);
    const changePage = (val) => {
        setNavStatus(val);
    }

    return(
        <div className={`${styles.container} flex-col items-center`}>
            <Navbar changePage={changePage}/>
                <div className={`${styles.productContainer} flex justify-center`}>
                    {navStatus === 1 ? 
                    <Product/> : 
                    <AddProduct/>
                    }
                </div>
            <Footer/>
        </div>
    )
    
}

export default Dashboard;