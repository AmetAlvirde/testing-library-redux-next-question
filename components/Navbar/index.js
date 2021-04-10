import React from 'react';
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Avatar,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineUsergroupAdd,
} from 'react-icons/ai';
import { GrLogout } from 'react-icons/gr';
import useUser from '../../lib/useUser';
import fetchJson from '../../lib/fetchJson';
import DarkModeSwitch from '../DarkModeSwitch';
// Chakra Link is preferred over Link, but for now it does not work properly
// with react 17.0.0
// import { Link as ChakraLink } from '@chakra-ui/react';

const Navbar = ({ publicContent }) => {
  const mobileNav = useDisclosure();
  const { mutateUser } = useUser();
  const router = useRouter();

  if (publicContent) {
    return (
      <Box shadow="md">
        <chakra.header
          background="brand.primary"
          minWidth={{
            base: '360px',
          }}
          borderColor="brand.primary"
          borderBottomWidth={1}
          width="full"
          paddingX={{ base: 2, sm: 4 }}
          paddingY={4}>
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <HStack spacing={4} display="flex" alignItems="center">
              <chakra.h1 fontSize="1.5rem">Home</chakra.h1>
            </HStack>
            <HStack spacing={3} display="flex" alignItems="center">
              <DarkModeSwitch />
            </HStack>
          </Flex>
        </chakra.header>
      </Box>
    );
  }

  return (
    <>
      <Box shadow="md">
        <chakra.header
          background="brand.primary"
          minWidth={{
            base: '360px',
          }}
          borderColor="brand.primary"
          borderBottomWidth={1}
          width="full"
          paddingX={{ base: 2, sm: 4 }}
          paddingY={4}>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            marginX="auto">
            <HStack spacing={4} display="flex" alignItems="center">
              <Box display={{ base: 'inline-flex', md: 'none' }}>
                <IconButton
                  display={{ base: 'flex', md: 'none' }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color={useColorModeValue('gray.800', 'inherit')}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />
                <VStack
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? 'flex' : 'none'}
                  flexDirection="column"
                  padding={2}
                  paddingBottom={4}
                  margin={2}
                  background="brand.primary"
                  spacing={3}
                  rounded="sm"
                  shadow="sm">
                  <CloseButton
                    aria-label="Close menu"
                    justifySelf="self-start"
                    onClick={mobileNav.onClose}
                  />
                  <Button
                    width="full"
                    variant="ghost"
                    href="#"
                    leftIcon={<AiFillHome />}>
                    Dashboard
                  </Button>
                  <Button
                    width="full"
                    variant="ghost"
                    href="#"
                    leftIcon={<AiOutlineUsergroupAdd />}>
                    Usuarios
                  </Button>
                  <Button
                    width="full"
                    variant="ghost"
                    href="/api/logout"
                    onClick={async e => {
                      e.preventDefault();
                      await mutateUser(fetchJson('/api/logout'));
                      router.push('/login');
                    }}
                    leftIcon={<AiOutlineUsergroupAdd />}>
                    Cerrar sesión
                  </Button>
                </VStack>
              </Box>
              <chakra.h1 fontSize="1.5rem">Home</chakra.h1>
            </HStack>
            <HStack spacing={3} display="flex" alignItems="center">
              <HStack spacing={3} display={{ base: 'none', md: 'inline-flex' }}>
                <Button
                  variant="ghost"
                  href="#"
                  leftIcon={<AiFillHome />}
                  size="sm">
                  Dashboard
                </Button>
                <Button
                  variant="ghost"
                  href="#"
                  leftIcon={<AiOutlineUsergroupAdd />}
                  size="sm">
                  Usuarios
                </Button>
                <Button
                  variant="ghost"
                  href="/api/logout"
                  size="sm"
                  onClick={async e => {
                    e.preventDefault();
                    await mutateUser(fetchJson('/api/logout'));
                    router.push('/login');
                  }}
                  leftIcon={<GrLogout />}>
                  Cerrar sesión
                </Button>
              </HStack>
              <Avatar
                size="sm"
                name="Aang"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvZktOF0YpLcbFczq6tZEX338TOdf7sdaH4w&usqp=CAU"
              />
            </HStack>
          </Flex>
        </chakra.header>
      </Box>
    </>
  );
};

export default Navbar;
