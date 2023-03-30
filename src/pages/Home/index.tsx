import { Play } from 'phosphor-react';

import { CountdownContainer, FormContainer, HomeContainer, Separator } from './styles';

export function Home() {
  const iconSize = 24;

  return (
    <HomeContainer>
      <form action=''>
        <FormContainer>
          <label htmlFor='task'>Vou trabalhar em</label>
          <input id='task' />

          <label htmlFor='minutesAmount'>durante</label>
          <input id='minutesAmount' type='number' />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type='submit'> <Play size={iconSize} /> Começar</button>
      </form>
    </HomeContainer>
  );
}
