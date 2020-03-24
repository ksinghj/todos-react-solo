import React from "react";

const handleFocus = event => event.target.select();
const Input = props => (
  <input type="text" value="Some something" onFocus={handleFocus} />
);

export default Input;
