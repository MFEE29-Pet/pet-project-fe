import React, { useState, useContext } from 'react';
import ThemeDogIcon from '../../Buttons/ThemeDogIcon';
import ThemeCatIcon from '../../Buttons/ThemeCatIcon';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';
import styled from 'styled-components';

const ThemeBox = styled.div`
  cursor: pointer;
`;

function ThemeChange() {
  const { mode, setMode } = useContext(SwitchButtonContext);
  const [theme, setTheme] = useState(1);
  // console.log(mode);
  const ChangeTheme = () => {
    setMode(mode === 'dog' ? 'cat' : 'dog');

    // setMode();

    setTheme(theme === 1 ? 0 : 1);
  };
  return (
    <ThemeBox onClick={ChangeTheme}>
      {theme === 1 ? <ThemeDogIcon /> : <ThemeCatIcon />}
    </ThemeBox>
  );
}

export default ThemeChange;
