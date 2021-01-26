import React from 'react';
import { useRouter } from 'next/router';

import Button from '../button';
import Input from '../input';

let router;

function enviaDados(event, name) {
  event.preventDefault();

  router.push(`/quiz?name=${name}`);

  console.log('enviando os dados');
}

export default function Form() {
  router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <form onSubmit={(event) => enviaDados(event, name)}>
      <Input
        onChange={(event) => setName(event.target.value)}
        placeholder="Digite seu nome aqui"
      />
      <Button type="submit" disabled={name.length === 0}>
        Jogar
      </Button>
    </form>
  );
}
