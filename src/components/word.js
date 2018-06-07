import React from 'react';
import styled from 'styled-components';

export const Word = ({ word, meaning, link }) => {
  const Wrapper = styled.div.attrs({ className: 'pv2' })``;
  const Header = styled.b.attrs({ className: 'fw6 lh-copy' })``;
  const Meaning = styled.div.attrs({ className: 'lh-copy' })``;
  const Link = styled.a.attrs({ className: 'f6 underline-hover mid-gray dim mr2 mb2' })``;

  return (
    <Wrapper id={word}>
      <Header>{word}</Header>
      <Meaning>{meaning}</Meaning>
      {link && link.length && (
        <Link href={link} target="_blank">related</Link>
      )}
    </Wrapper>
  );
};