import React from 'react';
import { useRouter } from 'next/router';

import Button from '../button';
import Input from '../input';

let router;

function enviaDados(event, name) {
  event.preventDefault();

  router.push(`/quiz?name=${name}`);
}

export default function Form() {
  router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <form onSubmit={(event) => enviaDados(event, name)}>
      <Input
        name="nomeDoUsuario"
        placeholder="Digite seu nome aqui"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Button type="submit" disabled={name.length === 0}>
        {`Jogar ${name}`}
      </Button>
    </form>
  );
}
