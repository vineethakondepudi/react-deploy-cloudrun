import React, { useContext } from 'react';
import { ThemeContext } from './Parent';

function Child() {
  const theme = useContext(ThemeContext);
  return <div className={`theme-${theme}`}>The current theme is {theme}</div>;
}

export default Child;
