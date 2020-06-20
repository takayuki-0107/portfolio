import React from 'react';
import styled from '@emotion/styled';
import { FaGithubSquare } from 'react-icons/fa';

import Color from '../../styles/Color';

const Github = styled(FaGithubSquare)`
  font-size: 3rem;
  color: ${Color.Text};
  margin: 0 0.5rem;
`;

export default () => {
  return (
    <>
      <Github />
    </>
  );
};
