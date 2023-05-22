'use client';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  contactNumber: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

 const Register = () => {
  return(
    <div>
      <h2>Signup</h2>
      <Formik
        initialValues={{
          fullName: '',
          ContactNumber: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="fullName" placeholder="fullName" />
            {errors.fullName && touched.fullName ? (
              <div>{errors.fullName}</div>
            ) : null}
            <br/><br/>
            <Field name="contactNumber" placeholder="phone number"/>
            {errors.contactNumber && touched.contactNumber ? (
              <div>{errors.contactNumber}</div>
            ) : null}
               <br/><br/>
            <Field name="email" placeholder="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <br/><br/>
            <Field name="Password" placeholder="Password"/>
            {errors.Password && touched.Password ? (
              <div>{errors.Password}</div>
            ) : null}
             <br/><br/>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      Already have an account yet? <Link href="/login"> Sing in</Link> Instead
    </div>
  );
 }

export default Register;
