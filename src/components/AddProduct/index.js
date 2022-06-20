import React, { useState } from "react";
import styles from "./index.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { db } from "../../firebase";
import { uid } from "uid";
import { ref, set } from "firebase/database";

const Push = ({values, sizes}) => {
    const uuid = uid();
    set(ref(db, `/product/${uuid}`), {
        category: values.category,
        name: values.name,
        sizes: sizes,
        stock: values.stock
    });
}

const AddProduct = () => {
    const [size, setSize] = useState("")
    const [price, setPrice] = useState("")
    const [sizes, setSizes] = useState([]);

    return(
        <div className={`${styles.container} border`}>
            <h1>Add Your Product Here!</h1>
            <Formik
            initialValues={{ category: '', name: '', stock: ""}}
            validate={values => {
                const errors = {};
                if (!values.category) {
                    errors.category = 'Required';
                }
                if (!values.name) {
                    errors.name = 'Required';
                }
                if (values.stock < 1) {
                    errors.stock = "Stock can't be zero!";
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log(values)
                Push({values, sizes});
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
                resetForm({values:""});
                setSizes([])
            }}
            >
            {({ isSubmitting }) => (
                <Form className={`${styles.formContainer} space-y-4`}>
                <label className="font-bold">Category</label>
                <div>
                    <Field className={`w-full border`} type="text" name="category"/>
                    <ErrorMessage name="category" component="div" />
                </div>
                <div>
                    <label className="font-bold">Name</label>
                    <Field className={`w-full border`} type="text" name="name"/>
                    <ErrorMessage name="name" component="div" />
                </div>
                <div className={`${styles.size} space-y-4 flex flex-col border p-4`}>
                    <div>
                        <label className="font-bold">Size</label>
                        <input className={`w-full border`} type="text" name="size" value={size} onChange={(e)=>{
                                setSize(e.target.value)
                            }
                        }/>
                    </div>
                    <div>
                    <label className="font-bold">Price</label>
                        <input className={`w-full border`} type="number" name="price" value={price} onChange={(e)=>{
                                setPrice(e.target.value)
                            }
                        }/>
                    </div>  
                    <div className={`rounded-lg border p-1 text-center`} onClick={()=>{
                        if(size!== "" || price !== "")
                            setSizes([...sizes, {size: size, price: price}])
                            setPrice("");
                            setSize("");
                        }}>
                        Add Size
                    </div>
                    {
                    sizes.map((value)=>{
                        return(
                            <div key={value.size} className={`flex flex-col`}>
                                <p className={`capitalize`}>{value.size} - P{value.price}</p>
                            </div>
                        )
                    })
                    }
                </div>
                <div>
                    <label className="font-bold">Stock</label>
                    <Field className={`w-full border`} type="number" name="stock"/>
                    <ErrorMessage name="stock" component="div" />
                </div>

                <button className={`rounded-lg border p-1 text-center`} type="submit" disabled={isSubmitting}>
                    Submit
                </button>
                </Form>
            )}
            </Formik>
     </div>
    )
}

export default AddProduct;