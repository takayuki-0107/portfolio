import React from 'react';
import styled from '@emotion/styled';
import WorksCardTop from './WorksCardTop';
import WorksCardBottom from './WorksCardBottom';

const WorksCard = styled.div`
  width: 400px;
  max-width: 80%;
  margin: 0 auto;
  margin-bottom: 3rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export default ({ title, lang, src, alt }) => {
  return (
    <>
      <WorksCard>
        <WorksCardTop title={title} lang={lang} />
        <WorksCardBottom src={src} alt={alt} />
      </WorksCard>
    </>
  );
};
