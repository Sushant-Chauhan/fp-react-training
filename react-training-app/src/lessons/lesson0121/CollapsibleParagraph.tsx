import { ReactNode, useState } from "react";
import style from "./styles.module.css";

const CollapsibleParagraph: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [hide, setHide] = useState(false);

  function onHideShow() {
    setHide((prevValue) => !prevValue);
  }

  return (
    <div>
      <div className={style.header}>
        <p>Message</p>
        {!hide ? (
          <button onClick={() => onHideShow()}>Hide</button>
        ) : (
          <button onClick={() => onHideShow()}>Show</button>
        )}
      </div>
      {!hide && children}
    </div>
  );
};

export default CollapsibleParagraph;
