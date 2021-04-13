// Dependencies
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import store from './store'
// Components
import LedgerNavBar from './components/LedgerNavBar'
import Expenses from './components/Expenses'
import WelcomeLayout from './components/WelcomeLayout'
//  Functions
import { loadUser } from './actions/authActions'
// Styling and UI
import './App.css'
import { Container } from '@material-ui/core'





// Will need to be removed
import 'bootstrap/dist/css/bootstrap.min.css'


const App = (props) => {

  useEffect(() => {
    store.dispatch(loadUser())
  })

  return (
      <div className="App">
        <LedgerNavBar />
        <Container>
          { props.isAuthenticated ? <Expenses /> : <WelcomeLayout /> }
        </Container>
      </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, null)(App)