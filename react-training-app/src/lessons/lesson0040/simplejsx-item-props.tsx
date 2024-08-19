import React from "react";
import { PropsWithChildren } from "react";
import "./simplejsx-props.css";

// type Article = {
//   hdr: string;
//   para: string;
// };

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

const SimpleJsxItemDataProp = (
  props: PropsWithChildren<{ hdr: string; para: string }>
) => {
  return (
    <div>
      <h3>{props.hdr}</h3>
      <p>{props.para}</p>
      <section>{props.children}</section>
    </div>
  );
};

export default SimpleJsxItemDataProp;
