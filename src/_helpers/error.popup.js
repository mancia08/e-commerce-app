import React from "react";
import styled from "styled-components";
import errorHandler from "../data/images/errorHandler.png";

export const StyledErrorService = styled.img`
  z-index: 100; /* do not change */
  display: none;
`;

const ErrorService = () => <StyledErrorService src={errorHandler} />;

export default ErrorService;
