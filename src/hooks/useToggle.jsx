import React, { useState } from "react";

export function useToggle(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);
  const toggle = () => setIsOpen(!isOpen);
  return { isOpen, toggle };
}
