import React from "react";
import { GlobalStyle } from "../../styles/global";
import { HeaderDiv, Svg } from "./styles";

function HeaderPolygon() {
  return (
    <HeaderDiv>
      <GlobalStyle />
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="#61A9EB" points="0,100 100,0 100,100" />
      </Svg>
    </HeaderDiv>
  );
}

export default HeaderPolygon;
