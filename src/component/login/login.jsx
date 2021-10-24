import { useFormik } from "formik";
import * as yup from "yup";
function Login() {
   const initialValues = {
        email: "",
        password: "",
        rememberMe: false,
    };
    const onSubmit = (values,{resetForm}) => {
      alert("Login Successfully");
      resetForm({values:''});
    };
    const validationSchema = yup.object({
        email: yup.string().email("Please enter a valid email address")
            .required("Email field is required"),
        password: yup.string().required("Password field is required"),
    });
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });
    return (
      <form onSubmit={formik.handleSubmit}>
      <div className="border mt-5 py-5 w-25 m-auto bg-light">
        <div className="mb-3 text-start ps-3">
        <label htmlFor="email" className="form-label fs-4">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          {...formik.getFieldProps("email")}
          className="form-control w-75 m-auto"
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: "red",textAlign:"center"}}>{formik.errors.email}</div>
        )}
        </div>
        <div className="mb-3 text-start ps-3">
        <label htmlFor="password" className="form-label fs-4">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          {...formik.getFieldProps("password")}
          className="form-control w-75 m-auto"
        />
         {formik.touched.password && formik.errors.password && (
          <div style={{ color: "red",textAlign:"center"}}>{formik.errors.password}</div>
        )}
        </div>
        <div className="mb-3 text-start ps-3">
          <label htmlFor="rememberMe" className="form-check-label">
            Remember Me
          </label>
          <input
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            {...formik.getFieldProps("rememberMe")}
            className="form-check-input ms-3"
          />
        </div>
        <button className="btn btn-primary d-block m-auto mt-3 fs-5" type="submit">Submit</button>
      </div>
    </form>
    )
}
export default Login;