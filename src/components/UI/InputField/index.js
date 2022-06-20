import React from "react";
import styles from "./index.module.css";

const InputField = ({type, name, onChange, value}) => {
    return(
        <input type={type} name={name} onChange={onChange} className={`border`} value={value}/>
    )
}

export default InputField;