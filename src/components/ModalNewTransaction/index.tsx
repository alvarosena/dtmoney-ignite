import Modal from 'react-modal';
import { FormEvent, useState } from "react";
import closeImg from '../../assets/close.svg';
import { Container, TranscationTypeContainer, RadioBox } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from "../services/api";

interface TransactionModal {
  isOpenModal: boolean;
  isCloseModal: () => void;
}

function ModalTranscation(props: TransactionModal) {

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

  return (

    <Modal isOpen={props.isOpenModal} onRequestClose={props.isCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={props.isCloseModal} className="react-model-close">
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
  )
}

export { ModalTranscation }