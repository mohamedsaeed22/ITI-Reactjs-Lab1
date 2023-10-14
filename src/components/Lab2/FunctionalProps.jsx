import React from "react";

const FunctionalProps = (props) => {
  const { name, age, track, message } = props.bio;
  return (
    <>
      <h3>
        Welcome "{name}" , Your Age = {age} , Your Track "{track}" and Your
        message is "{message}"
      </h3>
      {props.children}
    </>
  );
};

export default FunctionalProps;
