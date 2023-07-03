import React from "react";
import style from "./Square.module.css";

interface LargeSquareProps {
  bgColor?: string;
  width?: number;
  height?: number;
  position?: "static" | "relative" | "absolute" | undefined;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  translate?: string;
  children?: React.ReactNode;
  zIndex?: string;
}

interface InlineStlye {
  backgroundColor: string | undefined;
  width?: number | undefined;
  height?: number | undefined;
  position?: "static" | "relative" | "absolute" | undefined;
  top?: string | undefined;
  bottom?: string | undefined;
  right?: string | undefined;
  left?: string | undefined;
  translate?: string | undefined;
  zIndex?: string | undefined;
}

const LargeSquare: React.FC<LargeSquareProps> = ({ children, bgColor, width, height, zIndex, translate, position, top, bottom, right, left }) => {
  const inlineStyle: InlineStlye = {
    backgroundColor: bgColor,
    width,
    height,
    position,
    top,
    bottom,
    right,
    left,
    translate,
    zIndex,
  };

  return (
    <div className={style.Sqaure} style={inlineStyle}>
      {children}
    </div>
  );
};

export default LargeSquare;
