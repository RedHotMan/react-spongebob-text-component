import React from 'react';
import { spongeBobText } from './utils';

const SpongeBobTextComponent = ({text}) => {
  return <>{spongeBobText(text)}</>
}

export default SpongeBobTextComponent;
