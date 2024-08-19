import React from "react";
import "./compcondstyle.css";

interface FuncProps {
  src: string;
  alt: string;
  para: string;
}

const ArticleComponent: React.FC<FuncProps> = ({ src, alt, para }) => {
  return (
    <article className="panel-disp">
      <img className="image-disp" src={src} alt={alt} />
      <p>{para}</p>
    </article>
  );
};

export default ArticleComponent;
