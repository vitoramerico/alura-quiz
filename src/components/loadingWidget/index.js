import React from 'react';

import BoxWidget from '../boxWidget';

export default function LoadingWidget() {
  return (
    <BoxWidget>
      <BoxWidget.Header>
        Carregando...
      </BoxWidget.Header>

      <BoxWidget.Content>
        [Desafio do Loading]
      </BoxWidget.Content>
    </BoxWidget>
  );
}
