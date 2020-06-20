import React from 'react';
import styled from '@emotion/styled';

import Color from '../../../styles/Color';

const WorksCardBottom = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  border: 10px ridge ${Color.Text};
  /* &:before {
    display: block;
    content: '';
    padding-top: 0; */
  /* } */
  img {
    width: 100%;
    height: 100%;
  }
`;

export default ({ src, alt }) => {
  return (
    <>
      <WorksCardBottom>
        <img src={src} alt={alt} />
      </WorksCardBottom>
    </>
  );
};
