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
      const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
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
                    <div style={{ padding: 20 }}>
                        <FormikField label="UserName" name="userName" type="text" />
                        <FormikField label="Email" name="email" type="email" />
                        <FormikField label="Password" name="password" type="password" />
                        <FormikField label="ConfirmPass" name="confirmPassword" type="password" />
                        <FormikCheckbox label="Active" name="active" type="checkbox"/>
                        <FormikSelect label="Gender" name="gender"/>
                        <FormikArrayHobbies label="Hobbies" name="hobbies"/>
                        <button className="btn btn-primary d-block m-auto">submit</button>
                   </div>
              </Form>
            );
          }}
        </Formik>
    )
}
export default Register;