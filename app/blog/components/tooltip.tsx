"use client";

import { useState } from "react";

export const Tooltip = ({ number, text }: { number: string; text: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    setIsVisible(!isVisible);
  };

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onClick={handleClick}
    >
      <sup className="cursor-pointer text-cyan-500 hover:text-cyan-400">
        [{number}]
      </sup>
      {isVisible && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 px-3 py-2 bg-gray-950 border border-cyan-800 rounded text-sm text-gray-100 whitespace-normal z-50 pointer-events-none">
          {text}
        </span>
      )}
    </span>
  );
};
