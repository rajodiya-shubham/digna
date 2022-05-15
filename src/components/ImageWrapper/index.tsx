import React from "react";

type ImageWrapperProps = {
  imageUrl: string;
  className?: string;
};

const ImageWrapper: React.FC<ImageWrapperProps> = ({ imageUrl, className }) => {
  return (
    <figure className={className || ""}>
      <img src={imageUrl} alt="not found" className="w-100"></img>
    </figure>
  );
};

export default ImageWrapper;
