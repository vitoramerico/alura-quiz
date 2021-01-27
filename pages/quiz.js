/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import QuizBackground from '../src/components/quizBackground';
import QuizLogo from '../src/components/quizLogo';
import QuizContainer from '../src/components/quizContainer';
import QuestionWidget from '../src/components/questionWidget';
import LoadingWidget from '../src/components/loadingWidget';

const screenStates = {
  LOADING: 'LOADING',
  QUIZ: 'QUIZ',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionsSize = db.questions.length;
  const question = db.questions[currentQuestion];
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      if (screenState === screenStates.RESULT) router.push('/');
      else setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  });

  function handleSubmitQuiz() {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questionsSize) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={currentQuestion}
            questionsSize={questionsSize}
            onSubmit={handleSubmitQuiz}
          />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULT && <div> <h1> Fim do quiz </h1></div>}
      </QuizContainer>
    </QuizBackground>
  );
}
