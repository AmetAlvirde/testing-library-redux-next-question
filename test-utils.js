import React from 'react';
import { render } from '@testing-library/react';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import theme from './lib/theme';

const providersWrapper = ({ children }) => (
  <ChakraProvider resetCSS theme={theme}>
    <ColorModeProvider
      options={{
        useSystemColorMode: true,
      }}>
      {children}
    </ColorModeProvider>
  </ChakraProvider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: providersWrapper, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
