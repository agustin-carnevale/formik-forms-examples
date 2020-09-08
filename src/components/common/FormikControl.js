import React from 'react';
import Input from './Input'
import Textarea from './Textarea';
import Select from './Select';
import Radio from './Radio';
import CheckboxGroup from './CheckboxGroup';
import DatePicker from './DatePicker';
import ChakraInput from './ChakraInput';


const FormikControl = ({control, ...rest}) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest}/>
    case 'select':
      return <Select {...rest}/>
    case 'radio':
      return <Radio {...rest}/>
    case 'checkbox':
      return <CheckboxGroup {...rest}/>
    case 'date':
      return <DatePicker {...rest} />
    case 'chakrainput':
        return <ChakraInput {...rest} />
    default:
      return null
  }
}

export default FormikControl