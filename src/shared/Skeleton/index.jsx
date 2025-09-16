import React from "react";

export const Skeleton = ({ ...props }) => {
  return (
    <div
      {...props}
      className="skeleton"
      role="status"
      aria-busy="true"
      aria-label="Loading content"
    />
  );
};
