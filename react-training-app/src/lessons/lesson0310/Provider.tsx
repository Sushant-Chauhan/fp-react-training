import React, { ReactNode, useState } from "react";
import { ContextType } from "./ContextType";
import CSS from "csstype";

export const Context = React.createContext<ContextType | null>(null);

const Provider: React.FC<{ style: CSS.Properties; children: ReactNode }> = ({
  style,
  children,
}) => {
  const aCallback = () => {
    alert("HEY FROM METHOD");
    setName("");
  };

  const [name, setName] = useState("Batman");

  return (
    <Context.Provider
      value={{
        name,
        updateName: (name: string) => setName(name),
        aCallback: aCallback,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
