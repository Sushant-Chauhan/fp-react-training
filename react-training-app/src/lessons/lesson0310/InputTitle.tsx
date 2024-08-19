import React, { useContext } from "react";
import { Context } from "./Provider";
import { ContextType } from "./ContextType";

const InputTitle = () => {
  const { name } = useContext(Context) as ContextType;

  return <div>the context in Provider is : {name}</div>;
};

export default InputTitle;
