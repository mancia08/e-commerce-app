import React, { useState } from "react";
import { textData } from "../data/textData";
import useSound from "use-sound";
import error from "../data/images/error.mp3";
import styled from "styled-components";
import { theme } from "../data/theme";
import { StyledErrorService } from "./error.popup";

const StyledErrorHandler = styled.p`
  color: ${theme.colors.dark};
  font-size: ${theme.fonts.sizes.S};
  text-align: center;
  background-color: ${theme.colors.secondary};

  z-index: 101;

  :hover {
    ~ ${StyledErrorService} {
      display: block;
      width: 25vw;
      height: 25vw;
      position: fixed;
      top: 50%;
      left: 50%;
    }
  }
`;
const ErrorHandler = () => {
  const [errorHandling, { stop }] = useSound(error, { volume: 0.5 });
  const [accessDenied, accessError] = React.useState(true);

  return (
    <StyledErrorHandler
      onMouseEnter={() => {
        accessError(false);
        errorHandling();
      }}
      onMouseLeave={() => {
        accessError(true);
        stop();
      }}
    >
      <span isHovering={accessDenied}>{textData.closing}</span>
    </StyledErrorHandler>
  );
};

export default ErrorHandler;
