/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';

import BoxWidget from '../boxWidget';

export default function ResultWidget({ results, name }) {
  return (
    <BoxWidget>
      <BoxWidget.Header>
        Resultado das perguntas
      </BoxWidget.Header>

      <BoxWidget.Content>
        <p>
          {`${name} você acertou ${results.filter((x) => x).length} perguntas`}
        </p>
        <ul>
          {results.map((v, index) => (
            <li key={`result__${index}`}>
              {`#${index + 1} Pergunta: ${v === true ? 'Acertou' : 'Errou'}`}
            </li>
          ))}
        </ul>
      </BoxWidget.Content>
    </BoxWidget>
  );
}
