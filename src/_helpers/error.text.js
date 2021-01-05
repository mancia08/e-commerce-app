import React from "react";
import Text from "../components/atoms/text/Text";
import { textData } from "../data/textData";

const ErrorHandler = () => (
  <Text
    color="dark"
    size="XS"
    align="center"
    text={textData.closing}
    type="closing"
  />
);

export default ErrorHandler
