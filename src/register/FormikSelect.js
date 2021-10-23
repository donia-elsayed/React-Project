import {Field} from 'formik';
import FormikErrorMessage from "./FormikErrorMessage";
function FormikSelect({label,name}) {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label me-5">{label}</label>
            <Field as="select" name={name}>
                <option value=""></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </Field>
            <FormikErrorMessage name={name} />
        </div>
    )
}

export default FormikSelect
