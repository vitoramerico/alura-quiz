import React from 'react';
import { motion } from 'framer-motion';

import db from '../db.json';
import BoxWidget from '../src/components/boxWidget';
import Footer from '../src/components/footer';
import GitHubCorner from '../src/components/gitHubCorner';
import QuizBackground from '../src/components/quizBackground';
import QuizLogo from '../src/components/quizLogo';
import QuizContainer from '../src/components/quizContainer';
import Form from '../src/components/form';
import Link from '../src/components/link';

export default function Home() {
  const [nameEmpty, setNameEmpty] = React.useState(true);

  function handleChangeName(name) {
    setNameEmpty(name.length === 0);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <BoxWidget
          as={motion.section}
          transition={{
            delay: 0,
            duration: 0.5,
          }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <BoxWidget.Header>
            <h1>{db.title}</h1>
          </BoxWidget.Header>
          <BoxWidget.Content>
            <p>{db.description}</p>
            <Form onChangeName={handleChangeName} />
          </BoxWidget.Content>
        </BoxWidget>
        <BoxWidget
          as={motion.section}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <BoxWidget.Content>
            <h1>Quizes da Galera</h1>
            <ul>
              {db.external.map((link) => {
                const [projectName, githubUser] = new URL(link).host.split('.');

                return (
                  <li key={link}>
                    <BoxWidget.Topic as={Link} href={`/quiz/${projectName}___${githubUser}`} disabled={nameEmpty}>
                      {`${githubUser}/${projectName}`}
                    </BoxWidget.Topic>
                  </li>
                );
              })}
            </ul>
          </BoxWidget.Content>
        </BoxWidget>
        <Footer
          as={motion.section}
          transition={{
            delay: 1.0,
            duration: 0.5,
          }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/vitoramerico/alura-quiz" />
    </QuizBackground>
  );
}
