import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import useUser from '../lib/useUser';
import Layout from '../components/Layout';
import Counter from '../components/Counter';

const Index = () => {
  const { user } = useUser({ redirectTo: '/login' });

  if (!user || user.isLoggedIn === false) {
    return <Layout>loading...</Layout>;
  }

  return (
    <Layout>
      <Tabs defaultIndex={0} borderBottomColor="transparent">
        <TabList>
          <Tab paddingY={4} margin={0} _focus={{ boxShadow: 'none' }}>
            Counter
          </Tab>
          <Tab paddingY={4} margin={0} _focus={{ boxShadow: 'none' }}>
            Other content
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Counter />
          </TabPanel>
          <TabPanel>
            <p>Tab for another content</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default Index;
