import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import LoginPage from './containers/LoginPage'
import HomePage from './containers/HomePage'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()

class App extends Component {
  render() {
    return (
     <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" exact component={ LoginPage }></Route>
            <Route path="/home" exact component={ HomePage }></Route>
            <Route path="/" exact render= { ( props ) => ( 
              <Redirect to="/home"/>
            ) }/>
          </Switch>
        </Router>
        </Provider>
    )
  }
}

export default App;
