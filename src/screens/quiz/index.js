/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';

import QuizBackground from '../../components/quizBackground';
import QuizLogo from '../../components/quizLogo';
import AluraLogo from '../../components/aluraLogo';
import QuizContainer from '../../components/quizContainer';
import QuestionWidget from '../../components/questionWidget';
import LoadingWidget from '../../components/loadingWidget';
import ResultWidget from '../../components/resultWidget';

const screenStates = {
  LOADING: 'LOADING',
  QUIZ: 'QUIZ',
  RESULT: 'RESULT',
};

export default function QuizPage({ externalQuestions, externalBg }) {
  const router = useRouter();
  const { name } = router.query;
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionsSize = externalQuestions.length;
  const question = externalQuestions[currentQuestion];

  function addResult(result) {
    // results.push(result);
    // setResults(results);
    setResults([...results, result]);// cria um novo array e adiciona um valor no final
  }

  React.useEffect(() => {
    // getData();
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questionsSize) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={externalBg}>
      <QuizContainer>
        <AluraLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={currentQuestion}
            questionsSize={questionsSize}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULT && <ResultWidget results={results} name={name} />}
      </QuizContainer>
    </QuizBackground>
  );
}
