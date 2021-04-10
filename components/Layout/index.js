import React from 'react';
import Head from 'next/head';
import { useColorMode, chakra } from '@chakra-ui/react';
import useUser from '../../lib/useUser';
import Navbar from '../Navbar';

const Layout = ({ children = 'default children' }) => {
  const { colorMode } = useColorMode();
  const { user } = useUser();
  const backgroundColor = { light: 'gray.50', dark: 'gray.900' };
  const color = { light: 'gray.900', dark: 'gray.50' };

  return (
    <>
      <Head>
        <title>Advanced real world react app</title>
      </Head>
      {user?.isLoggedIn && <Navbar />}
      {!user?.isLoggedIn && <Navbar publicContent />}
      <chakra.main
        height="100vh"
        background={backgroundColor[colorMode]}
        color={color[colorMode]}>
        {children}
      </chakra.main>
    </>
  );
};

export default Layout;
