import * as Yup from 'yup';
import { Formik, Form } from "formik";
import { TextInput, Checkbox, Select } from './Inputs';

export default function SignupForm() {

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    jobType: '',
    acceptedTerms: false
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Reqired'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    jobType: Yup.string().required('Required'),
    acceptedTerms: Yup.boolean().required().oneOf([true], 'You must accept the terms and conditions'),
  });

  return (
    <Formik
      initialValues={ initialValues }
      onSubmit={ onSubmit }
      validationSchema={ validationSchema }
    >
      <div className="form-container">
        <Form>
          <TextInput
            type='text'
            id='firstName'
            name='firstName'
            label='First Name'
            placeholder='First Name'
          />

          <TextInput
            type='text'
            id='lastName'
            name='lastName'
            label='Last Name'
            placeholder='Last Name'
          />

          <TextInput
            type='email'
            id='email'
            name='email'
            label='Email'
            placeholder='Enter Email'
          />

          <Checkbox
            name='acceptedTerms'
            id='acceptedTerms'
          >
            I Accept terms and conditions
          </Checkbox>

          <Select name='jobType' id='jobType' label='Job Type'>
            <option value='option1'>Option-1</option>
            <option value='option2'>Option-2</option>
            <option value='option3'>Option-3</option>
            <option value='option4'>Option-4</option>
          </Select>

          <button type="submit">submit</button>
        </Form>
      </div>
    </Formik>
  );
}