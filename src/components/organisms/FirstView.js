import React from 'react';
import styled from '@emotion/styled';
// import ReactPlayer from 'react-player';

import LoopVideo from '../../asset/BlackWide.mp4';

import Color from '../../styles/Color';
import Typograph from '../../styles/Typograph';

const FirstView = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e3e1e5;
  position: relative;
  color: ${Color.Text};
  h2 {
    ${Typograph.Title}
    position: absolute;
    top: 50%;
    font-family: 'Sofia';
  }
  p {
    ${Typograph.Headline3}
    position: absolute;
    bottom: 10%;
    right: 10%;
  }
`;
const Background = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;
  video {
    position: absolute;
    top: 0;
    left: 50%;
    max-height: initial;
    max-width: initial;
    min-height: 100vh;
    min-width: 100%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
  }
`;
const Inner = styled.div`
  padding: 0 2rem;
`;

export default () => {
  return (
    <>
      <FirstView>
        <Background>
          <video autoplay loop>
            <source src={LoopVideo} />
          </video>
        </Background>
        <Inner>
          <h2>Takayuki Tooyama</h2>
          <p>Front Engineer</p>
        </Inner>
      </FirstView>
    </>
  );
};
