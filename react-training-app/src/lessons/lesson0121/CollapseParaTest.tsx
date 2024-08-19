import React from "react";
import CollapsibleParagraph from "./CollapsibleParagraph";

export default function CollapseParaTest() {
  return (
    <div>
      <CollapsibleParagraph>
        <p>This is a Paragraph</p>
      </CollapsibleParagraph>
      <CollapsibleParagraph>
        <p>This is another Paragraph</p>
      </CollapsibleParagraph>
    </div>
  );
}
