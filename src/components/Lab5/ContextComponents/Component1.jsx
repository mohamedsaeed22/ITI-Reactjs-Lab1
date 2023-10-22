import React, { useState } from "react";
import Component2 from "./Component2";
import { LanguageProvider } from "./LanguageContext";
import "./context.css";

function Component1() {
  const [lang, setLang] = useState("Free palestine");

  return (
    <div className="context-wrapper">
      <div className="container context c1">
        <p>Component 1</p>
        <LanguageProvider value={{ lang }}>
          <Component2 />
        </LanguageProvider>
      </div>
    </div>
  );
}

export default Component1;
