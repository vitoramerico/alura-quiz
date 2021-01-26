import React from 'react';

import db from '../db.json';
import BoxWidget from '../src/components/boxWidget';
import Footer from '../src/components/footer';
import GitHubCorner from '../src/components/gitHubCorner';
import QuizBackground from '../src/components/quizBackground';
import QuizLogo from '../src/components/quizLogo';
import QuizContainer from '../src/components/quizContainer';
import Form from '../src/components/form';

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <BoxWidget>
          <BoxWidget.Header>
            <h1>{db.title}</h1>
          </BoxWidget.Header>
          <BoxWidget.Content>
            <p>Teste seus conhecimentos sobre o Homem Aranha</p>
            <Form />
          </BoxWidget.Content>
        </BoxWidget>
        <BoxWidget>
          <BoxWidget.Content>
            <h1>Quizes da Galera</h1>
            <p>Adicionar aqui os sites..</p>
          </BoxWidget.Content>
        </BoxWidget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/vitoramerico/alura-quiz" />
    </QuizBackground>
  );
}
