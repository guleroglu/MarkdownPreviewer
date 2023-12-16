import React from "react";
import "./Preview.css";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";

const Preview = () => {
  const { markdown } = useSelector((state) => state.markdown);
  return (
    <div className="markdownPreview">
      <ReactMarkdown>
        {markdown === "" ? "Markdown" :  markdown }
      </ReactMarkdown>
    </div>
  );
};

export default Preview;
