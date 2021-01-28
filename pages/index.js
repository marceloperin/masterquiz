import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import db from '../db.json';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Evangelion Quiz</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(event) => {
              event.preventDefault(); // no reload page
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                placeholder="Digite seu nome"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar 
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget />
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="" />
    </QuizBackground>
  );
}
