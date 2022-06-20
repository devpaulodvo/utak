import React, { useState } from "react";
import styles from "./index.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { db } from "../../firebase";
import { uid } from "uid";
import { ref, set } from "firebase/database";
import InputField from "../UI/InputField";

const Push = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
        username: "test",
        email: "test",
        profile_picture : "imageUrl"
    });
}

const AddProduct = () => {
    const [smallchecked, smallSetChecked] = useState(false);
    const [mediumchecked, mediumSetChecked] = useState(false);
    const [largechecked, largeSetChecked] = useState(false);

    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [sizes, setSizes] = useState([]);
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);


    return(
        <div className={`${styles.container}`}>
            <h1>Add Your Product Here!</h1>
            <Formik
            initialValues={{ category: '', name: '', size: '', price: '', cost: '', stock: ''}}
            validate={values => {
                const errors = {};
                if (!values.category) {
                    errors.category = 'Required';
                }
                if (!values.name) {
                    errors.name = 'Required';
                }
                if (!values.size) {
                    errors.size = 'Required';
                }
                if (!values.price) {
                    errors.price = 'Required';
                }
                if (values.price < 1){
                    errors.price = "Price can't be zero!";
                }
                if (!values.stock) {
                    errors.stock = 'Required';
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values)
                Push()
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                <label>
                    Category
                    <InputField type={"text"} name={"category"}/>
                    <ErrorMessage name="category" component="div" />
                </label>
                <label>
                    Name
                    <InputField type={"text"} name={"name"}/>
                    <ErrorMessage name="name" component="div" />
                    </label>
                <label>
                    Size
                    <div className={`flex flex-col`}>
                    <label>
                            None&nbsp;
                             <input type="checkbox" id="none" onChange={()=>{
                                setSizes([])
                                document.getElementById("small").checked = false;
                                document.getElementById("medium").checked = false;
                                document.getElementById("large").checked = false;
                                smallSetChecked(false);
                                mediumSetChecked(false);
                                largeSetChecked(false)
                             }}/>
                        </label>
                        <label>
                            Small&nbsp;
                             <input type="checkbox" id="small" onChange={()=>{
                                 document.getElementById("none").checked = false;
                                 smallSetChecked(!smallchecked)
                                 if(smallchecked === false) {
                                 setSizes([...sizes, 1])
                                 }
                                 else{
                                    const filterSizes = sizes.filter(size => {
                                        return size !== 1
                                    })
                                    setSizes(filterSizes)
                                 }
                             }}/>
                        </label>
                        {sizes}
                        <label>
                            Medium&nbsp;
                             <input type="checkbox" id="medium" onChange={()=>{
                                 document.getElementById("none").checked = false;
                                 mediumSetChecked(!mediumchecked)
                                 if(mediumchecked === false) {
                                 setSizes([...sizes, 2])
                                 }
                                 else{
                                    const filterSizes = sizes.filter(size => {
                                        return size !== 2
                                    })
                                    setSizes(filterSizes)
                                 }
                             }}/>
                        </label>
                        <label>
                            Large&nbsp;
                             <input type="checkbox" id="large" onChange={()=>{
                                document.getElementById("none").checked = false;
                                largeSetChecked(!largechecked)
                                if(largechecked === false) {
                                setSizes([...sizes, 3])
                                }
                                else{
                                   const filterSizes = sizes.filter(size => {
                                       return size !== 3
                                   })
                                   setSizes(filterSizes)
                                }
                             }}/>
                        </label>
                    </div>
                    <ErrorMessage name="size" component="div" />
                </label>
                <label>
                    Price
                    <InputField type={"number"} name={"price"}/>
                    <ErrorMessage name="price" component="div" />
                </label>
                <label>
                    Stock
                    <InputField type={"number"} name={"stock"}/>
                    <ErrorMessage name="stock" component="div" />
                </label>
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
                </Form>
            )}
            </Formik>
     </div>
    )
}

export default AddProduct;