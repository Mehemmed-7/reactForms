import React from "react";
import {Formik} from "formik";
import * as Yup from "yup";
import "./Form.css";

const Form = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="card">
          <div className="forms">
            <h1>Login</h1>
            <div className="formSocial">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
            </div>
            <small>or use your account</small>
            <Formik
             initialValues = {{
                email:"",
                password:""
            }}
            validationSchema = {
                Yup.object({
                    email: Yup.string().email().required("Email boş bırakılamaz!"),
                    password: Yup.string().required("Lütfen şifrenizi giriniz!")
                })
            }
            onSubmit = {(values, {resetForm, setSubmitting}) => {
              console.log(values)
              setTimeout(() => {
                resetForm();
              },1000)
            }}
            >
                {
                    ({values,errors,handleSubmit,handleReset,handleChange,dirty,isSubmitting}) => (
                      <form action="" onSubmit = {handleSubmit}>
                          <input id="email" type="email" placeholder="Email" value = {values.email} onChange = {handleChange} />
                          <input id="password" type="password" placeholder="Password" value = {values.password} onChange =   {handleChange} />
                          {
                            errors.password && (
                              <small className="err">{errors.password}</small>
                            )
                          }
                          <small>Forgot your password?</small>
                          <button type = "submit" disabled = {!dirty || isSubmitting}>Log In</button>
                      </form>
                    )   
                }
            </Formik>
          </div>
          <div className="formBrand">
            <h1>HTML CSS Login Form</h1>
            <small>
              This login form is created using pure HTML and CSS For social
              icons.FontAwesome is used.
            </small>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
