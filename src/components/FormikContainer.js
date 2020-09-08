import React from 'react';
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './common/FormikControl';

const dropdownOptions = [
  {key: 'Select an option', value: ''},
  {key: 'Option 1', value: 'option1'}, 
  {key: 'Option 2', value: 'option2'},
  {key: 'Option 3', value: 'option3'}
]
const radioOptions = [
  {key: 'Option 1', value: 'roption1'}, 
  {key: 'Option 2', value: 'roption2'},
  {key: 'Option 3', value: 'roption3'}
]
const checkOptions = [
  {key: 'Option 1', value: 'coption1'}, 
  {key: 'Option 2', value: 'coption2'},
  {key: 'Option 3', value: 'coption3'}
]

const FormikContainer = (props) => {
  const initialValues = {
    email: '',
    chakraemail: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOptions: [],
    date: null
  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    chakraemail: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOptions: Yup.array().required('Required'),
    date: Yup.date().required('Required').nullable()
  })
  const onSubmit = values => console.log("Form Data: ", values)
 return (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {
      formik => (
        <Form>
          <FormikControl control='input' type='email' label='Email' name='email' />
          <FormikControl control='chakrainput' type='email' label='Chakra Email' name='chakraemail' />
          <FormikControl control='textarea' label='Description' name='description' />
          <FormikControl control='select' label='Select a Topic' name='selectOption' options={dropdownOptions} />
          <FormikControl control='radio' label='Radio Topic' name='radioOption' options={radioOptions} />
          <FormikControl control="checkbox" label="Checkbox Topics" name="checkboxOptions" options={checkOptions}/>
          <FormikControl control='date' label="Pick a date" name="date" />
          <button type='submit'>Submit</button>
        </Form>
      )
    }
  </Formik>
 )
}

export default FormikContainer