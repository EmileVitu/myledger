// Dependencies
import React, { useEffect } from 'react'
// Components
import LedgerNavBar from './components/LedgerNavBar'
// import ExpensesList from './components/ExpensesList'
import ExpenseModal from './components/ExpenseModal'
import store from './store'
//  Functions
import { loadUser } from './actions/authActions'
// Styling and UI
import './App.css'
import { Container } from '@material-ui/core'


// Will need to be removed
import 'bootstrap/dist/css/bootstrap.min.css'
import Expenses from './components/Expenses'




function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  })

  return (
      <div className="App">
        <LedgerNavBar />
        <Container>
          <ExpenseModal />
          {/* <ExpensesList /> */}
          <Expenses />
        </Container>
      </div>
  );
}

export default App



// Here is our previous class component rendering the same thing

// class App extends Component {

//   componentDidMount() {
//     store.dispatch(loadUser())
//   }
 
//   render() {
//     return (
//       <Provider store={store}>
//         <div className="App">
//           <LedgerNavBar />
//           <Container>
//             <ExpenseModal />
//             {/* <ExpensesList /> */}
//             <Expenses />
//           </Container>
//         </div>
//       </Provider>
//     );
//   }
// }

// export default App





