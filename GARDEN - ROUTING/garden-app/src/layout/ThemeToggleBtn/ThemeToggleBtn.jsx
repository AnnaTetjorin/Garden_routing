//import React, { useState, useEffect } from 'react';
//import { useTheme } from '../../ThemeProvider';

const ThemeToggleBtn = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isChecked, setChecked] = useState(isDarkMode);

  useEffect(() => {
    setChecked(isDarkMode);
  }, [isDarkMode])

  const handleToggle = () => {
    toggleTheme();
    setChecked(!isChecked);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      Dark/Light Mode
    </label>
  );
};

export default ThemeToggleBtn;