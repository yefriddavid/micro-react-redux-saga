import { login, errorRequest } from '../actions/authActions'
import { createReducer } from 'redux-act'
import { combineReducers } from 'redux'

const initial = {
    username: "",
    password: "",
    error: {}
}

const rest = createReducer({
    [login]: (state, payload) => {
        console.log(payload)
        return {
            ...state,
            username: payload.username,
            password: payload.password
        }
    },
    [errorRequest]: (state, payload) => {
        return {
            ...state,
            error: payload.error
        }
    }
}, initial)

export default combineReducers({
    rest
})