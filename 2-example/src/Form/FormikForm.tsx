import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object({

    name: Yup.string()
        .min(3, "The name must be unique and between 3 - 128 characters")
        .max(128, "The name must be unique and between 3 - 128 characters")
        .required("The name is not blank"),


    age: Yup.number()
        .required("Required"),

    address: Yup.string()
        .min(3, "The name must be unique and between 3 - 128 characters")
        .max(128, "The name must be unique and between 3 - 128 characters")
        .required("The name is not blank"),
});

function FormikForm() {

    const formik = useFormik({
        initialValues: {
            name: "",
            age: "",
            address: ""
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        formik.setFieldValue(e.target.name, e.target.value);
        console.log(e.target);
    };


    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input
                    name="name"
                    value={formik.values.name}
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                />

                <input

                    name="age"
                    value={formik.values.age}
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                />

                <input
                    name="address"
                    value={formik.values.address}
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                />
                <p>{formik.errors.name ?? null}</p>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormikForm