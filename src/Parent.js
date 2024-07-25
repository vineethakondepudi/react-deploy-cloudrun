import React, { createContext } from 'react';
import Child from './Child';

// Create the context
export const ThemeContext = createContext('light');

function Parent() {
  const theme = 'dark';

  return (
    <ThemeContext.Provider value={theme}>
      <Child />
    </ThemeContext.Provider>
  );
}

export default Parent;
