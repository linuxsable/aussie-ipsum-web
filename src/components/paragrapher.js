import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({ className: 'pt3 lh-copy' })``;
const Input = styled.input`
  width: 3em;
`;

const maxSentences = 9;
const minSentences = 2;
const maxWordsPerSentence = 13;
const minWordsPerSentence = 4;

export class Paragrapher extends Component {

  constructor(props) {
    super(props);
    this.state = { paragraphs: 3 };
  }

  render() {
    return (
      <Wrapper>
        <form>
          Paragraphs <Input type="number" min="1" max="100" value={this.state.paragraphs} onChange={this.handleChange} />
        </form>
        {this.renderParagraphs()}
      </Wrapper>
    );
  }

  handleChange = (event) => {
    this.setState({paragraphs: event.target.value});
  }

  renderParagraphs = () => {
    const paragraphs = [];

    for (let i = 0; i < this.state.paragraphs; ++i) {
      paragraphs.push(this.createParagraph());
    }

    return paragraphs;
  }

  createParagraph = () => {
    const numberOfSentences = Math.floor(Math.random() * (maxSentences - minSentences)) + minSentences;
    const sentences = [];
    
    for (let j = 0; j < numberOfSentences; ++j) {
      sentences.push(this.createSentence());
    }

    return (<p>{sentences.join(' ')}</p>);
  }

  createSentence = () => {
    const { words } = this.props;
    const numberOfWords = Math.floor(Math.random() * (maxWordsPerSentence - minWordsPerSentence)) + minWordsPerSentence;
    const sentenceWords = [];
    const tempWords = [...words];

    for (let k = 0; k < numberOfWords; ++k) {
      const wordIndex = Math.floor(Math.random() * tempWords.length);
      sentenceWords.push(tempWords[wordIndex].word);
      tempWords.splice(wordIndex, 1);
    }

    const sentence = sentenceWords.join(' ');
    return `${sentence.charAt(0).toUpperCase()}${sentence.slice(1)}.`;
  }
}
