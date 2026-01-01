import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./signup.css";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Create an account</h1>

        <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Full name
              <span> {errors.fullName && (
              <span className="error">{errors.fullName.message}</span>
            )}</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-input"
              {...register("fullName", {
                required: "Full name is required",
              })}
            />
           
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address
              <span>{errors.email && (
              <span className="error">{errors.email.message}</span>
            )}</span>
            </label>
            <input
           
              id="email"
              name="email"
              className="form-input"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            
            
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
              <span>{errors.password && (
              <span className="error">{errors.password.message}</span>
            )}</span>
            </label>

            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
             
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
              <span>{errors.confirmPassword && (
              <span className="error">{errors.confirmPassword.message}</span>
            )}</span>
            </label>

            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-input"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === document.getElementById("password").value ||
                  "Passwords do not match",
              })}
            />
             
          </div>

          <div className="checkbox-label-row">
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="checkbox-input"
              />
              <label htmlFor="rememberMe" className="checkbox-label">
                Remember me
              </label>
            </div>
            <button type="button" className="link-button forgot-password">
              Forgot password?
            </button>
          </div>

          <button type="submit" className="signup-button">
            Sign up
          </button>
        </form>

        <div className="divider">
          <span className="divider-text">Or continue with</span>
        </div>

        <div className="social-login">
          <button
            className="social-button google-button"
            
          >
            <img
              src="src/page/assets/google.png"
              alt="google"
              width="18"
              height="18"
            />
            <span>Google</span>
          </button>

          <button
            className="social-button facebook-button"
            
          >
            <img
              src="src/page/assets/facebook.png"
              alt="facebook"
              width="18"
              height="18"
            />

            <span>Facebook</span>
          </button>
        </div>

        <div className="signin-prompt">
          <p>
            Already have an account{" "}
            <Link className="link-button" to="/login">
              Sign in
            </Link>
          </p>
        </div>
      </div>
      <div className="signup-side">
        <img src="src/page/assets/login.jpg" alt="Login" />
      </div>
    </div>
  );
};

export default SignUp;
