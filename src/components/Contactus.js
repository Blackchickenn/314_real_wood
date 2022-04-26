import React from 'react'
import { Button, TextField } from '@mui/material' 
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function Contactus() {

    const formik = useFormik ({
        initialValues:{
            name: "",
            phoneNumber: "",
            email: "",
            questions: ""
        }, 
        validationSchema: Yup.object({
            name: Yup.string() 
                .max(20, "Should be 20 letters or less")
                .required("Required"),
            phoneNumber:Yup.number("phone number must be a number")
                .required("Required"),
            email:Yup.string()
                .email("Not correct email adrress")
                .required("Required"),
            questions: Yup.string() 
                .required("Required"),
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })
  return (
    <form onSubmit={formik.handleSubmit}>
        <div>
            <TextField 
                label="Name"
                id="name"
                name="name"
                type="text"
                // placeholder="First Name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null} 
        </div>
        <div>
            <TextField 
                label="Phone Number"
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                // placeholder="Last Name"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
                onBlur={formik.handleBlur}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? <p>{formik.errors.phoneNumber}</p> : null} 
        </div>
        <div>
            <TextField 
                label="Email"
                id="email"
                name="email"
                type="text"
                // placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null} 
        </div>
        <div>
            <TextField 
                label="Your Questions"
                multiline
                rows={5}
                type="text"
                name="questions"
                id="questions"
                onChange={formik.handleChange}
                value={formik.values.questions}
                onBlur={formik.handleBlur}
            />
            {formik.touched.questions && formik.errors.questions ? <p>{formik.errors.questions}</p> : null}
        </div>
        <Button variant='contained' size='large' color='warning' type='submit'>Submit</Button>
    </form>
  )
}
