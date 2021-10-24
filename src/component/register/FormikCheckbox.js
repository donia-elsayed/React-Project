import {Field} from 'formik';
import FormikErrorMessage from "./FormikErrorMessage";
import React from 'react'

function FormikCheckbox({name,label,type}) {
    return (
        <div>
        <Field name={name}>
      {(formikField) => {
        return (
          <div className="mb-2 text-start ps-3">
            <label htmlFor={name} className="form-check-label">{label}</label>
              <input
                type={type}
                id={name}
                {...formikField.field}
                defaultChecked={formikField.field.value}
                className="ms-3 m-auto"
              />
              <FormikErrorMessage name={name}/>
          </div>
        );
      }}
    </Field>
        </div>
    )
}

export default FormikCheckbox
