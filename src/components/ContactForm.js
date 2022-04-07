import { Formik, Form, FieldArray } from 'formik';
import { TextInput } from './Inputs';

export default function ContactForm() {
  const initialValues = {
    contacts: [{
      name: '',
      number: ''
    }]
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className='form-container'>
      <h1>Contact Form</h1>
      <Formik
        initialValues={ initialValues }
        onSubmit={ onSubmit }
      >
        <Form>
          <FieldArray name='contacts'>
            { formik => {
              const { form, push, remove } = formik;
              const { values } = form;
              const { contacts } = values;
              return contacts.map((contact, index) => {
                return (
                  <div className='form-section'>
                    <div className='form-group' key={ index }>
                      <TextInput
                        type='text'
                        name={ `contacts[${index}].name` }
                        className='form-input'
                        label='Name'
                      />
                      <TextInput
                        type='text'
                        name={ `contacts[${index}].number` }
                        className='form-input'
                        label='Number'
                      />
                      <div className='button-group'>
                        <button
                          type='button'
                          onClick={ () => push({ name: '', number: '' }) }>
                          +
                        </button>
                        {
                          index > 0 &&
                          <button type='button' onClick={ () => remove(index) }>
                            -
                          </button>
                        }
                      </div>
                    </div>

                  </div>
                );
              });
            } }
          </FieldArray>

          <button type='submit'>Submit</button>
        </Form>

      </Formik>
    </div>

  );
}