import React from 'react';
import PropTypes from "prop-types";
import { spongeBobText } from './utils';

var SpongeBobTextComponent = function SpongeBobTextComponent(_ref) {
  var text = _ref.text;
  return React.createElement(React.Fragment, null, spongeBobText(text));
};

SpongeBobTextComponent.propTypes = {
  text: PropTypes.string.isRequired
};
export default SpongeBobTextComponent;