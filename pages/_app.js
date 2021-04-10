import React from 'react';
import { SWRConfig } from 'swr';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { Provider as ReduxStore } from 'react-redux';
import { useStore } from '../lib/init-store';
import fetch from '../lib/fetchJson';
import theme from '../lib/theme';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <ReduxStore store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}>
          <SWRConfig
            value={{
              fetcher: fetch,
              onError: err => {
                // eslint-disable-next-line no-console
                console.error(err);
              },
            }}>
            <Component {...pageProps} />
          </SWRConfig>
        </ColorModeProvider>
      </ChakraProvider>
    </ReduxStore>
  );
}

export default MyApp;
