import { useEffect, useState } from "react"
import { Container } from "./styles"
import { api } from '../services/api';


interface ResponseTransaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  createdAt: string;
  type: string;
}

function TransactionsTable() {
  const [transactions, setTransactions] = useState<ResponseTransaction[]>([]);

  useEffect(() => {
    api.get('http://localhost:3000/api/transactions')
      .then(res => setTransactions(res.data.transactions));
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>{transaction.amount}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </Container>
  )
}

export { TransactionsTable }