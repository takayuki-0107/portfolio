import React from 'react';

import Layout from '../organisms/Layout';
import FirstView from '../organisms/FirstView';
import Profile from '../organisms/Profile';
import Skill from '../organisms/Skill';

const App = () => {
  return (
    <>
      <Layout>
        <FirstView />
        <Profile />
        <Skill />
      </Layout>
    </>
  );
};

export default App;
