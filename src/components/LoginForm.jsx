import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import "../App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "!Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "!Password is Required";
  } else if (values.password.length > 20) {
    errors.password = "Must be 20 characters or less";
  }

  return errors;
};

const LoginForm = () => {
  const { loginUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      resetForm({ values: "" });
      try {
        await loginUser(values.email, values.password);
        toast.success("Login Successful", {
          autoClose: 3000,
        });
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      } catch (error) {
        if (error.code === "auth/user-not-found") {
          setError("User not found. Please check your email.");
        } else if (error.code === "auth/wrong-password") {
          setError("Incorrect password. Please try again.");
        } else {
          setError("An error occurred. Please try again later.");
        }
        console.error(error);
      }
    },

    // onSubmit: (values, { resetForm }) => {
    //   // console.log(values);
    //   resetForm({ values: "" });
    //   try {
    //     loginUser(values.email, values.password).then((result) => {
    //       console.log(result);
    //       toast.success("login Successful", {
    //         autoClose: 3000,
    //       });
    //       setTimeout(() => {
    //         navigate("/dashboard");
    //       }, [3000]);
    //     });
    //   } catch (error) {
    //     if (error.code === "auth/user-not-found") {
    //       setError("User not found. Please check your email.");
    //     } else if (error.code === "auth/wrong-password") {
    //       setError("Incorrect password. Please try again.");
    //     } else {
    //       setError("An error occurred. Please try again later.");
    //     }
    //     console.error(error);
    //   }
    // },
  });

  return (
    <React.Fragment>
      <ToastContainer />
      {error && <div className="error">{error}</div>}
      <form onSubmit={formik.handleSubmit} className="form" id="form">
        <div className="field">
          <label className="label is-size-4">Email</label>
          <div className="control">
            <input
              className="input is-medium"
              type="text"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>
        <div className="field">
          <label className="label is-size-4">Password</label>
          <div className="control">
            <input
              className="input  is-medium"
              type="text"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
          {formik.touched.password && formik.errors.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div>
        <div className="has-text-centered">
          <p className="is-size-4 mb-3">
            <a href="/register">Dont Have an Account ?</a>
          </p>
        </div>
        <button className="button is-info is-large mb-3">Log In</button>
      </form>
    </React.Fragment>
  );
};

export default LoginForm;
