import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function Component5() {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="context">
      <p>
        this is Component 5 and this value from component 1 using Context "
        {lang}"
      </p>
    </div>
  );
}
