import React from 'react'
import { Button, TextField, Box, Typography } from '@mui/material' 
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { color } from '@mui/system'

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
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' sx={{
        '& .MuiTextField-root': { 
            m: 1, 
            width: {
                xs: 350,
                sm: 400,
                md: 500,
                lg: 500,
                xl: 500,
            }, 
            backgroundColor: '#282a2d',
            border: '1px solid #707279',
            },
        pb:'50px',
        backgroundColor: 'rgba(0,0,0,.75)'
      }}>
        <Typography variant='h4' sx={{
            fontFamily: 'Bebas Neue',
            letterSpacing: '3px',
            margin: 'auto',
            mt:'40px',
            mb: '40px',
            borderLeft:'2px solid #747474',
            borderRight:'2px solid #747474',
            pl:'20px',
            pr:'20px',
            display: 'inline-block',
            color: '#9e9e9e'
        }}>
            Contact Us</Typography>
        <form onSubmit={formik.handleSubmit} >
            <div className='input-container'>
                <TextField 
                    label="Name"
                    id="name"
                    name="name"
                    type="text"
                    // placeholder="First Name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    color="warning"
                />
                {formik.touched.name && formik.errors.name ? <p className='required'>{formik.errors.name}</p> : null} 
            </div>
            <div className='input-container'>
                <TextField 
                    label="Phone Number"
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    // placeholder="Last Name"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                    onBlur={formik.handleBlur}
                    color="warning"
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? <p className='required'>{formik.errors.phoneNumber}</p> : null} 
            </div>
            <div className='input-container'>
                <TextField 
                    label="Email"
                    id="email"
                    name="email"
                    type="text"
                    // placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    color="warning"
                />
                {formik.touched.email && formik.errors.email ? <p className='required'>{formik.errors.email}</p> : null} 
            </div>
            <div className='input-container'>
                <TextField 
                    label="Your Questions"
                    multiline
                    rows={8}
                    type="text"
                    name="questions"
                    id="questions"
                    onChange={formik.handleChange}
                    value={formik.values.questions}
                    onBlur={formik.handleBlur}
                    color="warning"
                />
                {formik.touched.questions && formik.errors.questions ? <p className='required'>{formik.errors.questions}</p> : null}
            </div>
            <Button variant='contained' size='large' color='warning' type='submit'  sx={{
                width: {
                    xs: 350,
                    sm: 400,
                    md: 500,
                    lg: 500,
                    xl: 500,
                    },
                alignItems: 'center',
                margin: '0 13px'
            }}
            >Submit</Button>
        </form>
      </Box>
  )
}


// text color: #747474
// border color: ##707279
// background color: rgba(0,0,0,.175)
// background color: #282a2d