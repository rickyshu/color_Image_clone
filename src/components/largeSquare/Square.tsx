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
  borderRight?: string;
  borderLeft?: string;
  borderTop?: string;
  borderBottom?: string;
}

interface InlineStlye {
  backgroundColor: string | undefined;
  width: number | undefined;
  height: number | undefined;
  position: "static" | "relative" | "absolute" | undefined;
  top: string | undefined;
  bottom: string | undefined;
  right: string | undefined;
  left: string | undefined;
  translate: string | undefined;
  zIndex: string | undefined;
  borderRight: string | undefined;
  borderLeft: string | undefined;
  borderTop: string | undefined;
  borderBottom: string | undefined;
}

const LargeSquare: React.FC<LargeSquareProps> = ({ children, bgColor, width, height, zIndex, translate, position, top, bottom, right, left, borderRight, borderLeft, borderBottom, borderTop }) => {
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
    borderRight,
    borderLeft,
    borderBottom,
    borderTop,
  };

  return (
    <div className={style.Sqaure} style={inlineStyle}>
      {children}
    </div>
  );
};

export default LargeSquare;
