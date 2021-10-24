import React from "react";
import { ErrorMessage } from "formik";
const FormikErrorMessage = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(errMessage) => {
        return <div style={{ color: "red",textAlign:"center"}}>{errMessage}</div>;
      }}
    </ErrorMessage>
  );
};
export default FormikErrorMessage;
