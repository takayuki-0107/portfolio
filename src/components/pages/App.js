import React from 'react';

import Layout from '../organisms/Layout';
import FirstView from '../organisms/FirstView';
import Profile from '../organisms/Profile';
import Skill from '../organisms/Skill';
import Works from '../organisms/Works';
import Contact from '../organisms/Contact';

const App = () => {
  return (
    <>
      <Layout>
        <FirstView />
        <Profile />
        <Skill />
        <Works />
        <Contact />
      </Layout>
    </>
  );
};

export default App;
