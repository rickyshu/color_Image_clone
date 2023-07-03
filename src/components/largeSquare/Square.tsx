import React from "react";
// style
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

type testinLineStyle = React.CSSProperties;

const LargeSquare: React.FC<LargeSquareProps> = ({ children, bgColor, width, height, zIndex, translate, position, top, bottom, right, left, borderRight, borderLeft, borderBottom, borderTop }) => {
  const inlineStyle: testinLineStyle = {
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
    <div className={style.Square} style={inlineStyle}>
      {children}
    </div>
  );
};

export default LargeSquare;
