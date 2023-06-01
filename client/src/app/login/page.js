'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logoImage from '../Image/logo.png';
import { Formik } from "formik";
import {useSelector, useDispatch} from 'react-redux'
import * as Yup from "yup";
import Link from 'next/link';
import '../styles/login.css';
import checkValidity from '../utils/checkFieldTypeValidity'
import {setLogin} from '../redux/reducerSlice/userSlice'

// Creating schema
const schema = Yup.object().shape({
    userIdentityField: Yup.string()
    .test(`validate userIdentityField`, (item)=>'invalid '+checkValidity(item?.value)[0], (value)=>  value?.length>0 && checkValidity(value)[1]),
    password: Yup.string()
        .required("Password is a required field")
        .min(8, "Password must be at least 8 characters"),
});

//validation lib 
function Login() {
    const dispatch = useDispatch()
    const router = useRouter();
    const handleLogin = async(values,resetForm) => {
        try{
          const userField = checkValidity(values.userIdentityField)
          values[userField[0]] = values.userIdentityField
          
          const requestOptions ={
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
          }
         const res = await fetch('http://localhost:8000/login', requestOptions)
         const data = await res.json()
         if(res.status == 200 && data.isLoggedIn){
            dispatch(setLogin(data))
            resetForm()
            router.push('/');
         }
        }catch(err){
            alert('login failed')
        }
      
      }
    return (
        <>
          
            <Formik
                validationSchema={schema}
                initialValues={{ userIdentityField: "", password: "" }}
                onSubmit={(values , { resetForm } ) => {
                    handleLogin(values,resetForm )
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
                    <div className="login">
                        <div className="form">
                            {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                            <form noValidate onSubmit={handleSubmit}>
                            <Image src={logoImage} alt="Logo" width={160} height={85} />
                                <span>Login</span>
                                
                                <input
                           
                                    name="userIdentityField"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.userIdentityField}
                                    placeholder="Enter email id / username/ phoneNumber"
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
                                
                                <button type="submit">Login</button>
                                <p className="Login-register-text mt-1">
                                    Don't have an account yet? <Link href="/register">Register</Link> instead
                                </p>
                            </form>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    );
}

export default Login;



