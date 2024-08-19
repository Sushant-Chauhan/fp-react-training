import React from "react";
import "./compstyle.css";

interface FuncProps {
  key: number;
  select: (idx: number) => void;
  selected: number;
  title: string;
  para: string;
  index: number;
}

const ArticleComponent: React.FC<FuncProps> = ({
  key,
  select,
  selected,
  title,
  para,
  index,
}) => {
  console.log(key, selected);
  return (
    <article
      className="panel-disp"
      onClick={() => {
        select(index);
      }}
    >
      <h3 className={selected === index ? "active" : ""}>{title}</h3>
      <p>{para}</p>
    </article>
  );
};

export default ArticleComponent;
