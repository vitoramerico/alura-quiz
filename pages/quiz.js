/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';

import _db from '../db.json';
import QuizBackground from '../src/components/quizBackground';
import QuizLogo from '../src/components/quizLogo';
import QuizContainer from '../src/components/quizContainer';
import QuestionWidget from '../src/components/questionWidget';
import LoadingWidget from '../src/components/loadingWidget';
import ResultWidget from '../src/components/resultWidget';

const screenStates = {
  LOADING: 'LOADING',
  QUIZ: 'QUIZ',
  RESULT: 'RESULT',
};

let db = _db;

function getData() {
  fetch('https://imersao-react-next-js.matheusmuriel.vercel.app/api/db').then((respServer) => respServer.json()).then((respConvertida) => {
    //console.log(respConvertida);
    db = respConvertida;
  });
}

export default function QuizPage() {
  const router = useRouter();
  const { name } = router.query;
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionsSize = db.questions.length;
  const question = db.questions[currentQuestion];

  function addResult(result) {
    // results.push(result);
    // setResults(results);
    setResults([...results, result]);// cria um novo array e adiciona um valor no final
  }

  React.useEffect(() => {
    //getData();
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
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
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
