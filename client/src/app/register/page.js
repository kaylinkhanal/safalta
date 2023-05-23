'use client';
import Image from 'next/image';
import logoImage from '../Image/logo.png';
import { Formik } from "formik";
import * as Yup from "yup";
import Link from 'next/link';
import '../styles/reg.css';


// Creating schema
const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

function Register() {
  return (
    <>

      <Formik
        validationSchema={schema}
        initialValues={{
          firstName: '',
          lastName: '',
           email: "",
            password: ""
        }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          alert(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="register">
            <div className="form">
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <Image src={logoImage} alt="Logo" width={160} height={85} />
                <span>Register</span>
                <input name="firstName"  placeholder="Enter First Name"
                  className="form-control"/>
                <p className="error">
                  {errors.firstName && touched.firstName && errors.firstName}
                </p>
               
                <input name="lastName"   
                placeholder="Enter Last  Name"
                  className="form-control"/>
                <p className="error">
                  {errors.lastName && touched.lastName && errors.lastName}
                </p>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />

                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>

                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />

                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>

                <button type="submit">register</button>
                <p className="register-register-text">
                  Already have an account ? <Link href="/login">Login</Link> instead
                </p>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Register;



