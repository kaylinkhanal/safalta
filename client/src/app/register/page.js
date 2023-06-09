'use client';
import Image from 'next/image';
import logoImage from '../Image/logo.png';
import { Formik } from "formik";
import * as Yup from "yup";
import Link from 'next/link';
import '../styles/reg.css';


function checkValidity(values){
  if( Number(values)?.toString() == NaN?.toString() && values?.includes('@') && values?.includes('.') ) {
       return ['email', true]
  }else if(Number(values).toString() != NaN.toString()){
    if(values?.length ==10){
     return ['phoneNumber' , true]
    }else{
     return ['phoneNumber' , false]
    }
  }
  else{
     if(values?.length <3 || !values){
       return ['username', false]
     }else{
         return ['username', true]
     }
  }
}

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
    userIdentityField: Yup.string()
    .test(`validate userIdentityField`, (item)=>'invalid '+checkValidity(item?.value)[0], (value)=>  value?.length>0 && checkValidity(value)[1]),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const handleRegister = async() => {
  
}

function Register() {
  return (
    <>

      <Formik
        validationSchema={schema}
        initialValues={{
          firstName: '',
          lastName: '', userIdentityField: "", password: ""
        }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          handleRegister(values)
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
               
                <input name="lastName"   placeholder="Enter Last  Name"
                  className="form-control"/>
                <p className="error">
                  {errors.lastName && touched.lastName && errors.lastName}
                </p>
                <input
                  name="userIdentityField"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.userIdentityField}
                  placeholder="Enter email id / username / phone no"
                  className="form-control inp_text"
                  id="userIdentityField"
                />

                <p className="error">
                  {errors.userIdentityField && touched.userIdentityField && errors.userIdentityField}
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



