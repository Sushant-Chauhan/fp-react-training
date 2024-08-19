import React from "react";

export default function Body(props: { count: number }) {
  console.log("Body is rendered");
  return <div>{`The Value is ${props.count}`}</div>;
}
