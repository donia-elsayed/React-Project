import {Field} from 'formik';
import FormikErrorMessage from "./FormikErrorMessage";
function FormikSelect({label,name}) {
    return (
        <div className="mb-2 text-start ps-3 d-flex">
            <label htmlFor={name} className="form-label me-5 fs-5">{label}</label>
            <Field as="select" name={name} className="form-select w-25">
                <option value=""></option>
                <option value="Male" >Male</option>
                <option value="Female">Female</option>
            </Field>
            <FormikErrorMessage name={name} />
        </div>
    )
}

export default FormikSelect
