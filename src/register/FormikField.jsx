import { Field } from "formik";
import FormikErrorMessage from "./FormikErrorMessage";
const FormikField = ({ name, type, label }) => {
  return (
    <Field name={name}>
      {(formikField) => {
        return (
          <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
              <input
                type={type}
                id={name}
                {...formikField.field}
                defaultChecked={formikField.field.value}
                className="form-control w-25 m-auto"
              />
              <FormikErrorMessage name={name}/>
          </div>
        );
      }}
    </Field>
    
  );
};

export default FormikField;