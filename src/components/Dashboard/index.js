import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Product from "../Product";
import AddProduct from "../AddProduct";
import { getDatabase, ref, child, get } from "firebase/database";

const Dashboard = () => {
    const [navStatus, setNavStatus] = useState(1);
    const [prod, setProducts] = useState({});

    useEffect(()=>{
        const dbRef = ref(getDatabase());
        get(child(dbRef, `product/`)).then((snapshot) => {
        if (snapshot.exists()) {
            setProducts(snapshot.val());
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
        });
    },[prod])

    const changePage = (val) => {
        setNavStatus(val);
    }

    return(
        <div className={`${styles.container} flex-col items-center`}>
            <Navbar changePage={changePage}/>
                <div className={`${styles.productContainer} flex justify-center space-x-3`}>
                    {navStatus === 1 ? 
                        Object.values(prod).map((value, index) => {
                            return(
                            <Product key={index} value={value}/>
                            )
                        })
                    : 
                    <AddProduct/>
                    }
                </div>
            <Footer/>
        </div>
    )
    
}

export default Dashboard;