import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const FormWrapper = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = (flag) => {
    setShowLogin(flag);
  };

  return (
    <>
      {showLogin ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <Signup toggleForm={toggleForm} />
      )}
    </>
  );
};

export default FormWrapper;
