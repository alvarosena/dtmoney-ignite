import { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface Modal {
  onOpenNewTransactionModal: () => void;
}

function Header(props: Modal) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt-money" />
        <button onClick={props.onOpenNewTransactionModal} type="button">
          New transaction
        </button>
      </Content>
    </Container>
  )
}

export { Header }