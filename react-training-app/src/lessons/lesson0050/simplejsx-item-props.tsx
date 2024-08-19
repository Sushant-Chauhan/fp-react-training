import React from "react";
import { PropsWithChildren } from "react";

import "./simplejsx-props.css";

// use props or destructure
// const SimpleJsxItemDataProp: React.FC<{ hdr: string; para: string }> = (
//   props
// ) => {
//   return (
//     <div>
//       <h3>{props.hdr}</h3>
//       <p>{props.para}</p>
//     </div>
//   );
// };

const SimpleJsxItemDataChildrenProp: React.FC<
  PropsWithChildren<{
    hdr: string;
    para: string;
  }>
> = ({ hdr, para, children }) => {
  return (
    <div>
      <h3>{hdr}</h3>
      <p>{para}</p>
      {children}
    </div>
  );
};

export default SimpleJsxItemDataChildrenProp;
