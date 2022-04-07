import { Formik, Form } from "formik";
import * as Yup from 'yup';
import { Checkbox, TextInput } from "./Inputs";

export default function LoginForm() {
  const initialValues = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptedTerms: false
  };

  const onSubmit = (values) => {
    if (values.password !== values.confirmPassword) {
      console.log('passwords do not match');
    }
    alert(JSON.stringify(values, null, 2));
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    userName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Reqired'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'passwords do not match'),
    acceptedTerms: Yup.boolean().oneOf([true], 'You should accept the terms and conditions')
  });


  return (
    <Formik
      initialValues={ initialValues }
      onSubmit={ onSubmit }
      validationSchema={ validationSchema }
      validateOnChange={ false }
    >

      < Form >
        <div className="form-container">
          <TextInput
            type='text'
            name='firstName'
            id='firstName'
            label='First Name'
            placeholder='Enter your first name'
          />

          <TextInput
            type='text'
            name='lastName'
            id='lastName'
            label='Last Name'
            placeholder='Enter your last name'
          />

          <TextInput
            type='text'
            name='userName'
            id='userName'
            label='User Name'
            placeholder='Choose an user name'
          />

          <TextInput
            type='email'
            name='email'
            id='email'
            label='Email'
            placeholder='Enter your email'
          />

          <TextInput
            type='password'
            name='password'
            id='password'
            label='Password'
            placeholder='Enter your password'
          />

          <TextInput
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            label='Confirm Password'
            placeholder='Re-Enter your password'
          />

          <Checkbox
            name='acceptedTerms'
            id='acceptedTerms'
          >
            I Accept the terms and conditions
          </Checkbox>

          <button type="submit">Register</button>
        </div>
      </Form>
    </Formik >
  );
}