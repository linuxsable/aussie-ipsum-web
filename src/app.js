import React, { Component } from 'react';
import styled from 'styled-components';

import { aussieIpsum } from './lib/aussie-ipsum';

import { Paragrapher } from './components/paragrapher';
import { Word } from './components/word';
import { WordCloud } from './components/word-cloud';
import { Footer } from './components/footer';

const Main = styled.main.attrs({ className: 'w-100 mw7 system-sans-serif bg-white pa3 pa5-ns fw2 center' })`
  -webkit-font-smoothing: antialiased;
`;

const HeadlineHeader = styled.h1.attrs({ className: 'f1 lh-title' })``;
const HeadlineTaglineHeader = styled.p.attrs({ className: 'lh-copy' })``;
const SectionHeader = styled.h2.attrs({ className: 'f3 ma0 pt2' })``;
const WordsSection = styled.div.attrs({ className: 'pv5' })``;

export class App extends Component {
  render() {
    const alphabetizedWords = aussieIpsum.sort(((a, b) => a.word.localeCompare(b.word)));

    return (
      <Main>
        <HeadlineHeader>Aussie Ipsum</HeadlineHeader>
        <HeadlineTaglineHeader>I.e., shit people at Atlassian say.</HeadlineTaglineHeader>
        <SectionHeader>Generator</SectionHeader>
        <Paragrapher words={aussieIpsum} />
        <SectionHeader>Dictionary</SectionHeader>
        <WordCloud words={alphabetizedWords} />
        <WordsSection>
          {alphabetizedWords.map((entry, index) => <Word key={index} {...entry} />)}
        </WordsSection>
        <Footer />
      </Main>
    );
  }
}
