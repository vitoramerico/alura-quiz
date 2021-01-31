/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';

import BoxWidget from '../boxWidget';
import Button from '../button';
import FormAlternatives from '../form_alternatives';
import BackLink from '../backLink';
import ResultadoResposta from '../resultadoResposta';

export default function QuestionWidget({
  question, questionsSize, questionIndex, onSubmit, addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionsSubmited, setQuestionsSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <BoxWidget>
      <BoxWidget.Header>
        <BackLink href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${questionsSize}`}
        </h3>
      </BoxWidget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <BoxWidget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <FormAlternatives onSubmit={(event) => {
          event.preventDefault();
          setQuestionsSubmited(true);

          setTimeout(() => {
            addResult(isCorrect);
            onSubmit();
            setQuestionsSubmited(false);
            setSelectedAlternative(undefined);
          }, 3 * 1000);
        }}
        >
          {isQuestionsSubmited && <ResultadoResposta isCorrect={isCorrect} />}

          {question.alternatives.map((v, index) => {
            const alternativeId = `qst__${questionIndex}_alt__${index}`;
            const alternativeStatus = isCorrect ? 'SUCESS' : 'ERROR';
            const isSelected = selectedAlternative === index;
            return (
              <motion.div whileTap={{ scale: 0.8 }}>
                <BoxWidget.Topic
                  as="label"
                  key={alternativeId}
                  htmlfor={alternativeId}
                  data-selected={isSelected}
                  data-status={isQuestionsSubmited && alternativeStatus}
                >
                  <input
                    id={alternativeId}
                    name={questionId}
                    type="radio"
                    style={{ display: 'none' }}
                    onChange={() => setSelectedAlternative(index)}
                  />
                  {v}
                </BoxWidget.Topic>
              </motion.div>
            );
          })}

          <Button
            type="submit"
            disabled={!hasAlternativeSelected}
          >
            Confirmar
          </Button>
        </FormAlternatives>
        {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}
      </BoxWidget.Content>
    </BoxWidget>
  );
}
