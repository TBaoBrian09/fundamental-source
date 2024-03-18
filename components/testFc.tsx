"use client";

import React, { useState } from "react";

function useToggleMenu() {
  const [menuShow, setMenuShow] = useState(false);
  const onToggleMenu = () => {
    setMenuShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };
  return [menuShow, setMenuShow] as const;
}

const TestFc = () => {
  return <div></div>;
};

export default TestFc;
