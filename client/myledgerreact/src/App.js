import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LedgerNavBar from './components/LedgerNavBar'
import ExpensesList from './components/ExpensesList'

function App() {
  return (
    <div className="App">
      <LedgerNavBar />
      <h1 className="text-align-center">Welcome to my Ledger MERN app !</h1>
      <ExpensesList />
    </div>
  );
}

export default App
