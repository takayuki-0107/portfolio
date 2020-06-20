import React from 'react';

import Layout from '../organisms/Layout';
import FirstView from '../organisms/FirstView';
import Profile from '../organisms/Profile';

const App = () => {
  return (
    <>
      <Layout>
        <FirstView />
        <Profile />
      </Layout>
    </>
  );
};

export default App;
