import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LedgerNavBar from './components/LedgerNavBar'
import ExpensesList from './components/ExpensesList'
import { Provider } from 'react-redux'
import store from './store'
import ExpenseModal from './components/ExpenseModal'
import { Container } from 'reactstrap'
import { loadUser } from './actions/authActions'
import React, { Component } from 'react'


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }
 
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <LedgerNavBar />
          <Container>
            <ExpenseModal />
            <ExpensesList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App