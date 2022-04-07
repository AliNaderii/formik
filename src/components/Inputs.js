import { useField } from "formik";

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-group">
      <label
        htmlFor={ props.id || props.name }
        className="form-label">
        { label }
      </label>

      <input className="form-input" { ...props } { ...field } />
      {
        meta.touched && meta.error
          ?
          <div className='error'>{ meta.error }</div>
          :
          null
      }
    </div>
  );
};

// checkbox input
export const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <div className="form-group">
      <label htmlFor={ props.id || props.name }>
        <input type='checkbox' { ...field } { ...props } />
        &nbsp;{ children }
      </label>

      {
        meta.touched && meta.error
          ?
          <div className='error'>{ meta.error }</div>
          :
          null
      }
    </div>
  );
};

// select input
export const Select = ({ children, label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="from-group">
      <label
        htmlFor={ props.id || props.name }
        className="form-label"
      >{ label }</label>

      <select className='select' { ...props } { ...field }>
        { children }
      </select>
      {
        meta.touched && meta.error
          ?
          <div className='error'>{ meta.error }</div>
          :
          null
      }
    </div>
  );
};