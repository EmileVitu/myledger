import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LedgerNavBar from './components/LedgerNavBar'
import ExpensesList from './components/ExpensesList'
import { Provider } from 'react-redux'
import store from './store'
import ExpenseModal from './components/ExpenseModal'
import { Container } from 'reactstrap'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LedgerNavBar />
        <Container>
          <ExpenseModal />
          <h1 className="text-align-center">Welcome to my Ledger MERN app !</h1>
          <ExpensesList />
        </Container>
      </div>
    </Provider>
  );
}

export default App
