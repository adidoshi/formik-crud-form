import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
// import TextError from './TextError'

function CheckboxGroup (props) {
  const { label, name, options, ...rest } = props
  return (
    <div className='form-control'>
      <div className='check-label'>
      <label>{label}</label>
      </div>
      <Field name={name}>
        {({ field }) => {
           // console.log("Field", field);
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <input
                className='check-input'
                  type='checkbox'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            )
          })
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default CheckboxGroup