import React from "react";

type RichTextProps = {
  heading: string;
  text: string;
  color?: string;
};

const RichText: React.FC<RichTextProps> = ({ heading, text, color }) => {
  return (
    <div className={`d-flex flex-column ml-4 ${color || ""}`}>
      <span className="font-size-4">{heading}</span>
      <span>{text}</span>
    </div>
  );
};

export default RichText;
