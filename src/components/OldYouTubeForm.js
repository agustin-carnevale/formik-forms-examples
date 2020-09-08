import React from 'react';
import {useFormik} from 'formik'
import * as Yup from 'yup'

const initialValues = {
  name: '',
  email:'',
  channel:''
}

const validate = (values)=>{
  let errors = {}

  if(!values.name){
    errors.name="Required"
  }
  if(!values.email){
    errors.email="Required"
  }else if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)){
    errors.email="Invalid email format"
  }
  if(!values.channel){
    errors.channel="Required"
  }
  return errors
}

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .required("Required")
    .email('Invalid email format'),
  channel: Yup.string().required("Required"),
})

const onSubmit = (values)=>{
  console.log(values)
}

const YouTubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate,
  })

  // console.log(formik.values)
  // console.log(formik.errors)
  return <div>
    <form onSubmit={formik.handleSubmit}>
      <div className='form-control'>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name'
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && 
        <div className='error'>{formik.errors.name}</div>}
      </div>

      <div className='form-control'>
        <label htmlFor='email'>E-mail</label>
        <input type='email' id='email' name='email'
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
          {formik.touched.email &&formik.errors.email && 
        <div className='error'>{formik.errors.email}</div>}
      </div>

      <div className='form-control'>
        <label htmlFor='channel'>Channel</label>
        <input type='text' id='channel' name='channel'
          onChange={formik.handleChange}
          value={formik.values.channel}
          onBlur={formik.handleBlur}
        />
        {formik.touched.channel && formik.errors.channel && 
        <div className='error'>{formik.errors.channel}</div>}
      </div>

      <button type='submit'>Submit</button>
    </form>

  </div>;
}



export default YouTubeForm;