import React from "react";
import ReactDOM from "react-dom/client";
import RegistrationForm from "./components/RegistrationForm.jsx";
import FormikForm from "./components/formikForm.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>Controlled Component Form</h1>
    <RegistrationForm />
    <hr />
    <h1>Formik Form</h1>
    <FormikForm />
  </React.StrictMode>
);
