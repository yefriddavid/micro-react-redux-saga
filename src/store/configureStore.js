import { createStore, applyMiddleware } from 'redux'
import combinedReducers from '../reducers/combineReducers'
import createSagaMiddleware from 'redux-saga'

export default function configureStore ( initialState ){
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore( combinedReducers, initialState, applyMiddleware(sagaMiddleware) )

    store.runSaga = sagaMiddleware.run
    return store
}