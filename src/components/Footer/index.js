import React from "react";
import styles from "./index.module.css";

const Footer = () => {
    return(
        <div className={`${styles.container} gap-6 justify-center items-center font-mono self-end`}>
            <span>Coded by: Paulo S. Dionisio</span>
        </div>
    )
}

export default Footer;