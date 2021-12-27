import { useState } from "react";
import Modal from 'react-modal';
import { Header } from "./components/Header";
import { GlobalStyle } from './styles/global';
import { Dashboard } from './components/Dashboard/index';

function App() {
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


      <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModalOpen}>
        <h1>Register new transaction</h1>
      </Modal>

      <GlobalStyle />
    </>
  );
}

export { App };
