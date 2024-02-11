import React from "react";

export const Heading3 = (p) => {
  return (
    <h3
      className={`text-4 text-black dark:text-grey-2 leading font-bold ${
        p.styles ? p.styles : ""
      }`}
    >
      {p.children}
    </h3>
  );
};
