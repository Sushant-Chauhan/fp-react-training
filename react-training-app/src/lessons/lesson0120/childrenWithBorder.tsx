import { ReactNode, PropsWithChildren } from "react";
import styles from "./styles.module.css";

// propsWithChildren
//string | JSX.Element | JSX.Element[] | () => JSX.Element
const ChildrenWithBorder: React.FC<
  PropsWithChildren<{ TextString: string }>
> = ({ children, TextString }) => {
  // const ChildrenWithBorder: React.FC<{
  //   children?: ReactNode;
  //   TextString: string;
  // }> = ({ children }) => {
  return <div className={styles.codestyle}>{children}</div>;
};

export default ChildrenWithBorder;
