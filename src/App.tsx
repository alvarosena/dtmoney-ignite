import { useState } from "react";
import { Header } from "./components/Header";
import { GlobalStyle } from './styles/global';
import { Dashboard } from './components/Dashboard/index';
import { ModalTranscation } from './components/ModalNewTransaction/index';

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
      <ModalTranscation isCloseModal={handleCloseNewTransactionModalOpen} isOpenModal={isNewTransactionModalOpen} />
      <GlobalStyle />
    </>
  );
}

export { App };
