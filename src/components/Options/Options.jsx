import React from "react";
import "./Options.css";
import { useSelector, useDispatch } from "react-redux";
import { handleMarkdown } from "../../features/markdown/markdownSlice";

const Options = () => {
  const dispatch = useDispatch();

  const { markdown } = useSelector((state) => state.markdown);

  return (
    <textarea
      placeholder="Enter your Markdown content here..."
      value={markdown}
      onChange={(e) => dispatch(handleMarkdown(e.target.value))}
    />
  );
};

export default Options;
