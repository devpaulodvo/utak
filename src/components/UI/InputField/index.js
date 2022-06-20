import React from "react";
import styles from "./index.module.css";

const InputField = ({type, name, onChange}) => {
    return(
        <input type={type} name={name} onChange={onChange} className={`border`}/>
    )
}

export default InputField;