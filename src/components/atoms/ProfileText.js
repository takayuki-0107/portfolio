import React from 'react';
import styled from '@emotion/styled';

import Color from '../../styles/Color';
import Typograph from '../../styles/Typograph';

const ProfileText = styled.div`
  ${Typograph.Body1}
  font-family: '游明朝体';
  width: 310px;
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
  color: ${Color.Text};
  @media (min-width: 960px) {
    margin: 0;
    border-radius: 10px;
    box-shadow: inset -3px -4px 5px #babecc, inset 4px 5px 10px #f5f5f5;
    padding: 2rem 4rem;
    width: 350px;
  }
  p {
    margin-bottom: 1.5rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  span {
    margin-left: 1rem;
  }
`;

const LongText = styled.p`
  text-align: left;
  padding: 1rem 0;
`;

export default () => {
  return (
    <ProfileText>
      <p>
        遠山 宜志 新潟県在住<span>20歳</span>
      </p>
      <p>
        フロント開発を中心として活動中。
        <br />
        新しい技術が大好き。
      </p>
      <LongText>
        大学では、12年続けてきた陸上をするためにスポーツを専攻。
        <br />
        スポーツをやる反面、小さい時から自分で想像したものを作ることが好きだった。
        <br />
        私は探しに探しプログラミングに出会った。
      </LongText>
      <p>
        自分の作ったものを使っていただける。
        <br />
        くだらないものでも笑いが生まれる。
      </p>
      <p>信頼されるエンジニアを目指している</p>
    </ProfileText>
  );
};
