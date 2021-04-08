// Dependencies
import React, { Component } from 'react'
import { Provider } from 'react-redux'
// Components
import LedgerNavBar from './components/LedgerNavBar'
import ExpensesList from './components/ExpensesList'
import ExpenseModal from './components/ExpenseModal'
import store from './store'
//  Functions
import { loadUser } from './actions/authActions'
// Styling and UI
import './App.css'
import { Container } from '@material-ui/core'


// Will need to be removed
import 'bootstrap/dist/css/bootstrap.min.css'





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