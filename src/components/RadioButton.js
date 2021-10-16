import React from "react";
import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

function RadioButton(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <div className='radio-label'>
      <label>{label}</label>
      </div>
      <Field name={name} {...rest}>
      {({ field }) => {
        // console.log("Field", field);
        return options.map((option) => {
          return (
            <React.Fragment key={option.key}>
              <input
              className='radio-input'
                type="radio"
                id={option.value}
                {...field}
                value={option.value}
                checked={field.value === option.value}
              />
              <label htmlFor={option.value}> {option.key} </label>
            </React.Fragment>
          );
        });
      }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default RadioButton;
