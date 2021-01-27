/* eslint-disable react/prop-types */
import React from 'react';

import BoxWidget from '../boxWidget';
import Button from '../button';

export default function QuestionWidget({
  question, questionsSize, questionIndex, onSubmit,
}) {
  const questionId = `question__${questionIndex}`;

  return (
    <BoxWidget>
      <BoxWidget.Header>
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

        <form onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
        >
          {question.alternatives.map((v, index) => {
            const alternativeId = `qst__${questionIndex}_alt__${index}`;
            return (
              <BoxWidget.Topic key={alternativeId} as="label" htmlfor={alternativeId}>
                <input
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                />
                {v}
              </BoxWidget.Topic>
            );
          })}

          <Button type="submit">
            Confirmar
          </Button>
        </form>
        {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}
      </BoxWidget.Content>
    </BoxWidget>
  );
}
