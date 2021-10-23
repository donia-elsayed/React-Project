import { useFormik } from "formik";
import * as yup from "yup";
function Login() {
   const initialValues = {
        email: "",
        password: "",
        rememberMe: false,
    }
    const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
    const validationSchema = yup.object({
        email: yup.string().email("Please enter a valid email address")
            .required("Email field is required"),
        password: yup.string().required("Password field is required"),
    })
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });
    return (
      <form onSubmit={formik.handleSubmit}>
      <div style={{ padding: 20 }}>
        <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          {...formik.getFieldProps("email")}
          className="form-control w-25 m-auto"
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        )}
        </div>
        <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          {...formik.getFieldProps("password")}
          className="form-control w-25 m-auto"
        />
         {formik.touched.password && formik.errors.password && (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        )}
        </div>
       

        <div className="mb-3">
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
        <button className="btn btn-primary d-block m-auto mt-3">submit</button>
      </div>
    </form>
    )
}
export default Login;