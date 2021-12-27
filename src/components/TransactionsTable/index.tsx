import { useEffect } from "react"
import { Container } from "./styles"
import { api } from '../services/api';

function TransactionsTable() {
  useEffect(() => {
    api.get('http://localhost:3000/api/transactions')
      .then(res => console.log(res.data));
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>02/20/2021</td>
          </tr>
          <tr>
            <td>Aluguem</td>
            <td className="withdraw">- R$1.100,00</td>
            <td>Casa</td>
            <td>17/20/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

export { TransactionsTable }