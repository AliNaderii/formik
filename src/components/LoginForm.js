import { Formik, Form } from "formik";
import * as Yup from 'yup';
import { TextInput } from "./Inputs";

export default function LoginForm() {
  const initialValues = {
    email: '',
    password: ''
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Reqired'),
    password: Yup.string().required('Required')
  });


  return (
    <Formik
      initialValues={ initialValues }
      onSubmit={ onSubmit }
      validationSchema={ validationSchema }
    >
      <Form>
        <div className="form-container">
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

          <button type="submit">Login</button>
        </div>

      </Form>
    </Formik>
  );
}