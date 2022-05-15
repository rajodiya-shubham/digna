import React from "react";

type WrapperProps = {
  left?: React.ReactNode;
  right?: React.ReactNode;
  leftSize?: number;
  rightSize?: number;
  className?: string;
};

const Wrapper: React.FC<WrapperProps> = ({
  left,
  right,
  leftSize,
  rightSize,
  className,
}) => {
  return (
    <div className={`d-flex ${className || ""}`}>
      <div style={{ width: `${leftSize}%` }}>{left}</div>
      <div style={{ width: `${rightSize}%` }}>{right}</div>
    </div>
  );
};

export default Wrapper;
