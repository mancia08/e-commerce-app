import React, { useContext } from "react";
import { textData } from "../data/textData";
import useSound from "use-sound";
import error from "../data/images/error.mp3";
import bug from "../data/images/bug.mp3";
import styled from "styled-components";
import { theme } from "../data/theme";
import { StyledErrorService } from "./error.popup";
import { StyledErrorPopUp } from "./error.interceptors";
import { ShopContext } from "../context/ShopContext";

const StyledErrorHandler = styled.p`
  color: ${theme.colors.dark};
  font-size: ${theme.fonts.sizes.S};
  text-align: center;
  background-color: ${theme.colors.secondary};

  z-index: 3;

  :hover {
    ~ ${StyledErrorService} {
      display: block;
      width: 25vw;
      height: 25vw;
      position: fixed;
      top: 50%;
      left: 50%;
      /* write from here */
      -webkit-animation: spin 1s forwards;
      animation: spin 1s forwards;
      /* to here */
    }
    ~ ${StyledErrorPopUp} {
      display: block;
    }
    /* write from here */
    @-webkit-keyframes spin {
      from {
        -webkit-transform: scale(0.1, 0.1) skew(0deg) rotate(0deg);
      }
      to {
        -webkit-transform: scale(1, 1) skew(0deg) rotate(360deg);
      }
    }
    @keyframes spin {
      from {
        transform: scale(0.1, 0.1) skew(0deg) rotate(0deg);
      }
      to {
        transform: scale(1, 1) skew(0deg) rotate(360deg);
      }
    }
    /* to here */
  }
`;
const ErrorHandler = () => {
  const [errorHandling, { stop }] = useSound(error, { volume: 0.5 });
  const [bugHandling] = useSound(bug, { volume: 2.5 });
  const [accessDenied, accessError] = React.useState(true);
  const context = useContext(ShopContext);

  return (
    <StyledErrorHandler
      onMouseEnter={() => {
        accessError(false);
        errorHandling();
        context.state.isLoggedIn && bugHandling();
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
