import React from "react";
import CSS from "csstype";

import Provider from "./Provider";
import Input from "./Input";
import InputTitle from "./InputTitle";

const styles: CSS.Properties = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const ContextAppOne = () => (
  <Provider style={styles}>
    <Input />
    <InputTitle />
  </Provider>
);

export default ContextAppOne;
