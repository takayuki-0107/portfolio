import React, { useState, useCallback } from 'react';
// import styled from '@emotion/styled';

// import Color from '../../styles/Color';
import GlobalStyle from '../../styles/GlobalStyle';
import MobileDrawer from './MobileDrawer';
import Header from './Header';

export default ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return (
    <>
      <GlobalStyle />
      <Header handleToggle={handleToggle} />
      <MobileDrawer handleToggle={handleToggle} toggle={toggle} />
      {children}
    </>
  );
};
