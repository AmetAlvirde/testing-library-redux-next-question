import React from 'react';
import { render } from '@testing-library/react';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { Provider as ReduxStore } from 'react-redux';
import { useStore } from './lib/init-store';
import theme from './lib/theme';

const providersWrapper = ({ children }) => {
  // As pageProps.initialReduxState is undefined in _app.js
  const store = useStore(undefined);
  return (
    <ReduxStore store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}>
          {children}
        </ColorModeProvider>
      </ChakraProvider>
    </ReduxStore>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: providersWrapper, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
