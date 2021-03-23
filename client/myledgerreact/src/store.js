import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

// We first set our initial state to a variable assigned to an empty object
const initialState = {}
// Then we set our middleware in an array
const middleware = [thunk]


// Then we can create our store in a variable as well
const store = createStore(
    rootReducer, 
    initialState, 
    compose(
        applyMiddleware(...middleware), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)


// Now we can export it in order for other components to be able to access our store
export default store