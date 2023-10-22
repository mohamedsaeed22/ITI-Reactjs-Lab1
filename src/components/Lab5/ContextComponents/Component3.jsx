import React, { useContext } from "react";
import Component4 from "./Component4";
import { LanguageContext } from "./LanguageContext";

function Component3() {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="context">
      <p>
        This is Component 3, and this value from Component 1 using Context: "
        {lang}"
      </p>
      <Component4 />
    </div>
  );
}

export default Component3;
