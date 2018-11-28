import React from 'react'
import { makeVote } from '../reducers/anecdoteReducer'
import PropTypes from 'prop-types'
import { newAnecdotes } from '../reducers/notificationReducs'
import Filter from '../components/Filter'
import  serverVote from '../services/anecdotes'



class AnecdoteList extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }
  render() {
    console.log('Kirjaimet',this.context.store.getState().Letters)

    const show = () => {
      console.log("Masa",this.context.store.getState())
      const { Letters, anecdotesKaksi} = this.context.store.getState()

      if(Letters === ''){
        return anecdotesKaksi
      } else {
        return anecdotesKaksi.filter(x => x.content.toLowerCase().indexOf(Letters) > -1)
      }  
    }
    //const anecdotes = this.props.store.getState()
    //const anecdotes = this.context.store.getState().anecdotesKaksi
    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter />
        {show().sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => 
                this.context.store.dispatch(makeVote(anecdote.id)) &&
                  this.context.store.dispatch(newAnecdotes(anecdote.content)) &&
                  serverVote.addVote(anecdote.id, anecdote.content, anecdote.votes)
                
                //this.context.store.dispatch(newAnecdotes(anecdote.id))
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}
AnecdoteList.contextTypes = {
  store: PropTypes.object
}
export default AnecdoteList
