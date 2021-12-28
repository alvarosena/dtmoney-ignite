import { FormEvent, useState } from "react";
import Modal from 'react-modal';
import { Header } from "./components/Header";
import { GlobalStyle } from './styles/global';
import { Dashboard } from './components/Dashboard/index';
import closeImg from './assets/close.svg';
import { Container, TranscationTypeContainer, RadioBox } from './components/ModalNewTransaction/styles';
import incomeImg from './assets/income.svg';
import outcomeImg from './assets/outcome.svg';
import { api } from "./components/services/api";

function App() {
  Modal.setAppElement('#root');

  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  const [type, setType] = useState('deposit');

  const handleCreateNewTranscation = (event: FormEvent) => {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type,
    };

    api.post('/transactions', data);
  }

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModalOpen = () => {
    setIsNewTransactionModalOpen(true);
  }

  const handleCloseNewTransactionModalOpen = () => {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModalOpen} />
      <Dashboard />


      <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModalOpen}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button type="button" onClick={handleCloseNewTransactionModalOpen} className="react-model-close">
          <img src={closeImg} alt="Close" />
        </button>
        <Container onSubmit={handleCreateNewTranscation}>
          <header>
            <h2>Register a new transaction</h2>
          </header>
          <input value={title} onChange={event => setTitle(event.target.value)} type="text" name="title" placeholder="Title" autoFocus autoComplete="off" />
          <input value={value} onChange={event => setValue(Number(event.target.value))} type="number" name="value" placeholder="Value" autoFocus autoComplete="off" />

          <TranscationTypeContainer>
            <RadioBox
              isActive={type === 'deposit'}
              activeColor="green"
              type="button"
              onClick={() => setType('deposit')}
            >
              <img src={incomeImg} alt="Income" />
              <span>Income</span>
            </RadioBox>

            <RadioBox
              isActive={type === 'withdraw'}
              activeColor="red"
              type="button"
              onClick={() => setType('withdraw')}
            >
              <img src={outcomeImg} alt="Outcome" />
              <span>Outcome</span>
            </RadioBox>
          </TranscationTypeContainer>

          <input value={category} onChange={event => setCategory(event.target.value)} type="text" name="category" placeholder="Category" autoFocus autoComplete="off" />
          <button type="submit">Register</button>
        </Container>
      </Modal>

      <GlobalStyle />
    </>
  );
}

export { App };
