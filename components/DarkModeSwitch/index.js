import React from 'react';
import { useColorMode, Switch } from '@chakra-ui/react';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return <Switch isChecked={isDark} onChange={toggleColorMode} />;
};

export default DarkModeSwitch;
