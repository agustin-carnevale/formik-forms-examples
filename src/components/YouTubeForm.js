// using Formik Components
import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError';

const initialValues = {
  name: '',
  email:'',
  channel:'',
  comments:'',
  address:'',
  social:{
    facebook:'',
    twitter:''
  }
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
  return (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
    <Form>
      <div className='form-control'>
        <label htmlFor='name'>Name</label>
        <Field type='text' id='name' name='name'/>
        <ErrorMessage name='name' component={TextError}/>
      </div>

      <div className='form-control'>
        <label htmlFor='email'>E-mail</label>
        <Field type='email' id='email' name='email'/>
        <ErrorMessage name='email'/>
      </div>

      <div className='form-control'>
        <label htmlFor='channel'>Channel</label>
        <Field type='text' id='channel' name='channel'/>
        <ErrorMessage name='channel'/>
      </div>

      <div className='form-control'>
        <label htmlFor='comments'>Comments</label>
        <Field as="textarea" type='text' id='comments' name='comments'/>
        <ErrorMessage name='comments'/>
      </div>

      {
        //render props pattern
      } 
      <div className='form-control'>
        <label htmlFor='address'>Address</label>
        <Field name='address'>
          {
            (props)=>{
              return (
                <div>
                  <input type='text' id='address' {...props.field} />
                   {props.meta.touched && props.meta.error && 
                      <div className='error'>{props.meta.error}</div>}
                </div>
              )
            }
          }
        </Field>
      </div>

      <div className='form-control'>
        <label htmlFor='facebook'>Facebook Profile</label>
        <Field type='text' id='facebook' name='social.facebook'/>
      </div>

      <div className='form-control'>
        <label htmlFor='twitter'>Twitter Profile</label>
        <Field type='text' id='twitter' name='social.twitter'/>
      </div>

      <button type='submit'>Submit</button>
    </Form>

  </Formik>
  )
}



export default YouTubeForm;