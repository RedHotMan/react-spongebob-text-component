import React from 'react';
import PropTypes from "prop-types";
import { spongeBobText } from './utils';

const SpongeBobTextComponent = ({text}) => {
  return <>{spongeBobText(text)}</>
}

SpongeBobTextComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SpongeBobTextComponent;
