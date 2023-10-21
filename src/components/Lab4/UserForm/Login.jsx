import React, { useState } from "react";
import "./useform.css";

const Login = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      pass: "",
    });
  };

  const handleClick = () => {
    if (toggleForm) {
      toggleForm(false);
    }
  };

  return (
    <>
      <section className="form-wrapper">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <span>Login</span>
            <div className="row">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Enter Your Email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                id="password"
                name="pass"
                value={formData.pass}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <input type="submit" value="Login" />
            </div>
            <div className="row signin" onClick={handleClick}>
              Don't Have Account? Signup
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
