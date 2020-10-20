/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import validate from "./ValidateInfo";
import useForm from "./useForm";
import { Link } from "react-router-dom";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className="form-inputs">
          <label className="title">Organization Name</label>
          <input
            className="form-input"
            type="text"
            name="Organization Name"
            placeholder="Name of Organization"
            value={values.organizationname}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label className="title">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label className="title">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="example@email.com"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="title">Address</label>
          <input
            className="form-input"
            type="text"
            name="address"
            placeholder="City, State, Country"
            value={values.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label className="title">Contact</label>
          <input
            className="form-input"
            type="tel"
            name="contact"
            placeholder="Phone Number"
            value={values.contact}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label className="title">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label className="title">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <Link to="/Adminboard">
          <button className="form-input-btn" type="submit">
            Sign up
          </button>
        </Link>
        <span className="form-input-login">
          Already have an account? Login <a href="/">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
