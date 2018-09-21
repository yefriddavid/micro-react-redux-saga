import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import combinedReducers from '../reducers/combineReducers'
import createSagaMiddleware from 'redux-saga'

import rootSagas from '../sagas'

const composeEnhancers = composeWithDevTools({
// Specify name here, actionsBlacklist, actionsCreators and other options if needed
})
  

export default function configureStore ( initialState ){
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore( combinedReducers, 
        //initialState, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        //compose(composeEnhancers(
        applyMiddleware(sagaMiddleware)
        )

    store.runSaga = sagaMiddleware.run(rootSagas)
    return store
}