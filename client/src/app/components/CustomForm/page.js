'use client';
import {useState} from 'react';
import Image from 'next/image';
import { Formik } from "formik";
import * as Yup from "yup";
import "../../styles/login.css"
import Link from 'next/link';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Autocomplete from '@mui/joy/Autocomplete';
import Chip from '@mui/joy/Chip';
import Close from '@mui/icons-material/Close';

function CustomForm(props) {
    const [file, setFile] = useState(null)
    const submitFormData = async(values) => {
        const form = new FormData();
        Object.entries(values).forEach(item=>{
          form.append(item[0], item[1])
        })
        form.append('itemImage', file)

         axios.post("http://localhost:3000" + props.apiEndpoint , form )
         .then((res) => {
         alert(res.data.msg)
        });
    }
  
    const handleFileSave = (e)=>{
      console.log(e)
      setFile(e.target.files[0])
    }

  return (
    <>
    <div>
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
          setFieldValue,
          handleSubmit,
        }) => (
 
            <div >
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                { props.formItems && props.formItems.map((item)=>{
                  if(item.type == 'selection'){
                    return(
                      <Autocomplete
                      id={item.label}
                      multiple
                      placeholder={item.label}
                      options={item.availableSelection}
                      getOptionLabel={(option) => option.title}
                      onChange={(e, value) => setFieldValue(item.label, JSON.stringify(value))}
                      defaultValue={[item.availableSelection[0]]}
                      renderTags={(tags, getTagProps) =>
                        tags.map((item, index) => (
                          <Chip
                            variant="solid"
                            color="primary"
                            endDecorator={<Close fontSize="sm" />}
                            {...getTagProps({ index })}
                          >
                            {item.title}
                          </Chip>
                        ))
                      }
                    />
                    )
                  }else{
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
                  }
                 
                }) }
              
              
                {!props.disableSaveOption  &&  <button type="submit">Save</button>}
               
              </form>
          </div>
        )}
      </Formik>
      </div>
    </>
  );
}

export default CustomForm;



