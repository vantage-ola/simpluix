// BUTTON COMPONENT

import React from "react";

// STYLES
import { Wrapper } from "./Button.styles";

const Button = ({text, callback }) => (
 <Wrapper type="button" onClick={callback}>
   {text}
 </Wrapper>
)

export default Button;

