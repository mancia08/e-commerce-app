import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
  background-color: red;
`;
const Button = (props) => <StyledButton>{props.text}</StyledButton>;

export default Button;
