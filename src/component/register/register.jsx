import { Formik, Form } from "formik";
import FormikField from "./FormikField";
import FormikArrayHobbies from "./FormikArrayHobbies";
import FormikSelect from "./FormikSelect";
import FormikCheckbox from "./FormikCheckbox";
import * as yup from "yup";
function Register() {
    const initialValues = {
        username:"",
        email: "",
        password: "",
        confirmPassword: "",
        active: false,
        gender:"",
        hobbies:['']
      };
      const onSubmit = (values) => alert("Registred Successfully");
      const validationSchema = yup.object({
        userName:yup.string().required("* UserName Field is required"),
        email: yup
          .string()
          .email("* Please enter a valid email address")
          .required("* Email field is required"),
        password: yup.string().required("* Password field is required"),
        confirmPassword: yup.string()
         .oneOf([yup.ref('password'), null], '* Password must match'),
        gender:yup.string().required("* Gender field is required"),
      });
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
            return (
                <Form>
                    <div className="border my-3 py-3 w-25 m-auto bg-light">
                        <FormikField label="UserName" name="userName" type="text"/>
                        <FormikField label="Email" name="email" type="email"/>
                        <FormikField label="Password" name="password" type="password"/>
                        <FormikField label="ConfirmPass" name="confirmPassword" type="password"/>
                        <FormikSelect label="Gender" name="gender"/>
                        <FormikCheckbox label="Active" name="active" type="checkbox"/>
                        <FormikArrayHobbies label="Hobbies" name="hobbies"/>
                        <button className="btn btn-primary d-block m-auto mt-4">Submit</button>
                   </div>
              </Form>
            );
          }}
        </Formik>
    )
}
export default Register;