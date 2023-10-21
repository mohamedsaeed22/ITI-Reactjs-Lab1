import React, { useState } from "react";

const Signup = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    });
    handleClick();
  };

  const handleClick = () => {
    if (toggleForm) {
      toggleForm(true);
    }
  };

  return (
    <>
      <section className="form-wrapper">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <span>Sign Up</span>
            <div className="row">
              <label htmlFor="fullName">FullName</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
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
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Your Password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                placeholder="Enter Your Phone"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <input type="submit" value="Sign Up" />
            </div>
            <div className="row signin" onClick={handleClick}>
              Already have Account? Login
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
