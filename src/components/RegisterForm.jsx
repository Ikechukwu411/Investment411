import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { AuthContext } from "../../Context/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebaseconfig";
import emailjs from "@emailjs/browser";

const validate = (values) => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "!firstname is Required";
  } else if (values.firstname.length > 15) {
    errors.firstname = "Must be 15 characters or less";
  }
  if (!values.lastname) {
    errors.lastname = "!lastname is Required";
  } else if (values.lastname.length > 15) {
    errors.lastname = "Must be 15 characters or less";
  }

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
  if (!values.confirm) {
    errors.confirm = "!Confirm Password is Required";
  } else if (values.confirm.length > 20) {
    errors.confirm = "Must be same with password";
  }

  return errors;
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  // if (user) {
  //   navigate("/dashboard");
  // }

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirm: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      resetForm({ values: "" });
      try {
        const result = await createUser(values.email, values.password);
        await updateProfile(result.user, {
          displayName: values.firstname,
        });

        // Add user details to Firestore
        const userDetails = {
          firstname: values.firstname,
          lastname: values.lastname,
          email: values.email,
          amount: 0,
          userId: result.user.uid, // User ID from Firebase Auth
        };

        // Add user details to Firestore collection
        await addDoc(collection(db, "users"), userDetails);

        console.log(result);
        toast.success("Signup Successful", {
          autoClose: 3000,
        });
        setTimeout(() => {
          navigate("/login");
        }, 3000);

        const serviceId = "service_xyu3bxo";
        const templateId = "template_jv4a0an";
        const publicKey = "zqts_NXzr_eBaQXJq";

        const templateParams = {
          from_name: values.firstname,
          from_email: values.email,
          to_name: "Admin",
        };

        emailjs
          .send(serviceId, templateId, templateParams, publicKey)
          .then((response) => {
            console.log("email sent successfully", response);
          });
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <React.Fragment>
      <ToastContainer />
      <form onSubmit={formik.handleSubmit}>
        <h1 className="is-size-1 has-text-centered">Register</h1>
        <div className="field">
          <label className="label is-size-4" htmlFor="firstname">
            First Name
          </label>
          <div className="control">
            <input
              className="input is-medium"
              type="text"
              placeholder="Text input"
              id="firstname"
              name="firstname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstname}
            />
          </div>
          {formik.errors.firstname ? (
            <div style={{ color: "red" }}>{formik.errors.firstname}</div>
          ) : null}
        </div>
        <div className="field">
          <label className="label is-size-4" htmlFor="lastname">
            Last Name
          </label>
          <div className="control">
            <input
              className="input is-medium"
              type="text"
              placeholder="Text input"
              id="lastname"
              name="lastname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastname}
            />
          </div>
          {formik.errors.lastname ? (
            <div style={{ color: "red" }}>{formik.errors.lastname}</div>
          ) : null}
        </div>
        <div className="field">
          <label className="label is-size-4" htmlFor="email">
            Email
          </label>
          <div className="control">
            <input
              className="input is-medium"
              type="email"
              placeholder="email@gmail.com"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          {formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="field">
          <label className="label is-size-4" htmlFor="password">
            Password
          </label>
          <div className="control">
            <input
              className="input is-medium"
              type="password"
              placeholder="123456"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
          {formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="field">
          <label className="label is-size-4" htmlFor="confirm">
            Confirm Password
          </label>
          <div className="control">
            <input
              className="input is-medium"
              type="password"
              placeholder="12345"
              id="confirm"
              name="confirm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirm}
            />
          </div>
          {formik.errors.confirm ? (
            <div style={{ color: "red" }}>{formik.errors.confirm}</div>
          ) : null}
        </div>
        <button className="button  is-fullwidth is-medium mt-5" type="submit">
          {" "}
          Submit
        </button>
        <p className="is-size-4 mt-4">
          Already a member ? <Link to="/login">Login here!</Link>
        </p>
      </form>
    </React.Fragment>
  );
};

export default RegisterForm;
