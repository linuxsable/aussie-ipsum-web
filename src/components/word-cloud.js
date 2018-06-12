import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({ className: 'pv3' })``;
const Link = styled.a.attrs({ className: 'blue dim mr2 mb2' })`
  display: inline-block;
`;

export const WordCloud = ({ words }) => {
  return (
    <Wrapper>
      {words.map((entry, index) => (
        <Link href={`#${entry.word}`}>
          {entry.word}
        </Link>
      ))}
    </Wrapper>
  );
};
