import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import store from './store'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdotrReducer from './reducers/anecdoteReducer'
import { addJsonAnecdotes } from './reducers/anecdoteReducer'
import notificationreducer from './reducers/notificationReducs'
import filterReducer from './reducers/filterReducer'
import anecdotesService from './services/anecdotes'


const reducer = combineReducers({
  anecdotesKaksi: anecdotrReducer,
  notificationsKaksi: notificationreducer,
  Letters: filterReducer
})

const store = createStore(reducer, composeWithDevTools())

anecdotesService.getData().then(anecdotes => {
    store.dispatch(addJsonAnecdotes(anecdotes))
})


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

/*
const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
*/
