import React from "react";
import { textData } from "../data/textData";
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

const ErrorHandler = () => (
  <StyledErrorHandler>{textData.closing}</StyledErrorHandler>
);

export default ErrorHandler;
