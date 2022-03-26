import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import "./index.scss";
function Viewport({ children, maxWidth = 450, maxHeight = 896 }) {
  const [width, height] = useWindowSize();

  return width > maxWidth || height > maxHeight ? (
    <div className="Viewport">
      <div className="ViewportContent">{children}</div>
    </div>
  ) : (
    <>
      {children}
      <div className="BottomCornerCover" />
    </>
  );
}

export default Viewport;
