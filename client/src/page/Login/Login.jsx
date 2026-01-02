import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LoginApi } from "../auth/auth";

const Login = () => {

  const {register, handleSubmit, formState:{errors}} = useForm();
  const navigate = useNavigate();

  async function onSubmit(data){
  
    console.log(data)
    try {
  await LoginApi({ email:data.email, password:data.password });
  toast.success("Welcome back!");
  navigate("/");
} catch (err) {
  toast.error(err.message);
}

  }
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Sign in to your account</h1>

        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address
               <span>{errors.email && (
              <span className="error">{errors.email.message}</span>
            )}</span>
            </label>
            <input
              type="email"
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

          <button type="submit" className="signin-button">
            Sign in
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

        <div className="signup-prompt">
          <p>
            No account?{" "}
            <Link className="link-button" to="/signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <div className="login-side">
        <img src="src/page/assets/login.jpg" alt="Login" />
      </div>
    </div>
  );
};

export default Login;
