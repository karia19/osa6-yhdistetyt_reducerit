import React from 'react'
import { addCreate } from '../reducers/anecdoteReducer'
import PropTypes from 'prop-types'
import { newAnecdotes } from '../reducers/notificationReducs'
import addAnecdotes  from '../services/anecdotes'


class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.context.store.dispatch(newAnecdotes(content)) &&
    this.context.store.dispatch(
       addCreate(content) 
    )
    addAnecdotes.createNewAnecdotes(content)
    
  
    e.target.anecdote.value = ''
  }
   render() {
     
     return (
       <div>
      <h2>create new</h2>
      
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button> 
        </form>
      </div>
     )
   }
}
AnecdoteForm.contextTypes = {
  store: PropTypes.object
}

export default AnecdoteForm
