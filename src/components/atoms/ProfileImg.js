import React from 'react';
import styled from '@emotion/styled';
import ProfileImg from '../../asset/profile.jpg';

const Img = styled.img`
  display: block;
  width: 175px;
  height: 175px;
  border-radius: 50%;
  box-shadow: 3px 3px 10px rgba(#000, 0.7);
  margin: 0 auto 3rem;
  @media (min-width: 960px) {
    width: 230px;
    height: 230px;
    margin-bottom: 2rem;
  }
`;

export default () => {
  return <Img src={ProfileImg} />;
};
