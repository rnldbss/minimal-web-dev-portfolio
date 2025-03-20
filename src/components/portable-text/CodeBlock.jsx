import React from "react";
import { Refractor, registerLanguage } from "react-refractor";
import "../../styles/prism-duotone-sea.css";
import clike from "refractor/lang/clike.js";
import js from "refractor/lang/javascript.js";
import ts from "refractor/lang/typescript.js";

registerLanguage(clike);
registerLanguage(js);
registerLanguage(ts);

export default function CodeBlock({ language = "javascript", code }) {
  return (
    <div className="[&>pre>code>span]:!font-source-pro [&>pre>code>span>span]:!font-source-pro [&>pre>code>span>span>span]:!font-source-pro [&>pre>code>span]:text-sm [&>pre>code]:!font-source-pro [&>pre>code]:text-sm max-w-xl">
      <Refractor language={language} value={code} />
    </div>
  );
}
