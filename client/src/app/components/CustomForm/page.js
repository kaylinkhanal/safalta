'use client';
import {useState} from 'react';
import Image from 'next/image';
import { Formik } from "formik";
import * as Yup from "yup";
import "../../styles/login.css"
import Link from 'next/link';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';

function CustomForm(props) {
    const [file, setFile] = useState(null)
    const submitFormData = async(values) => {
        await axios.post("http://localhost:8000" + props.apiEndpoint , values )
    }
  
    const handleFileSave = (e)=>{
      setFile(e.target.files[0])
    }

  return (
    <>
    <div className="form">
      <Formik
        initialValues={{}}
        onSubmit={(values, { resetForm }) => {
           submitFormData(values)
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
                { props.formItems && props.formItems.map((item)=>{
                    return (
                        <>
                          <input 
                            name={item.label}
                            onChange={(e)=>item.type == 'file' ? handleFileSave(e) : handleChange(e)}
                            value={values[item.label]}
                            id={item}
                            type={item.type}
                            placeholder={item.label}
                            className="form-control"/>
                            <p className="error">
                            {errors[item.label] && touched[item.label] && errors[item.label]}
                            </p>
                        </>
                    )
                }) }
              
              
      
                <button type="submit">Save</button>
             
              </form>
            </div>
          </div>
        )}
      </Formik>
      </div>
    </>
  );
}

export default CustomForm;



