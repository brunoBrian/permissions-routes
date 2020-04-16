import React, { createContext, useState } from 'react';
import {themeContext} from './themeStyle';

const Context = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const handleChangeColor = () => {
    if(theme === 'dark') {
      setTheme('light')
      localStorage.setItem('theme', JSON.stringify(themeContext.light));
    } else {
      localStorage.setItem('theme', JSON.stringify(themeContext.dark));
      setTheme('dark')
    }
  }

  return (
    <Context.Provider value={{theme: themeContext[theme], handleChangeColor}}>
      {children}
    </Context.Provider>
  );
}

export { Context, ThemeProvider };
