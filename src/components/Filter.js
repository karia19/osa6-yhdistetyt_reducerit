import React from 'react'
import PropTypes from 'prop-types'
import { Filtered } from '../reducers/filterReducer'


class Filter extends React.Component {
    handleChange = (event) => {
      console.log(event.target.value)
      const letters = event.target.value
      this.context.store.dispatch(Filtered(letters))
      
      //const anecdotes = this.context.store.getState().anecdotesKaksi
 
      //console.log(anecdotes.filter(x => x.content.toLowerCase().indexOf(letters.toLowerCase())> -1))


    }
    render() {
      const style = {
        marginBottom: 10
      }
  
      return (
        <div style={style}>
          filter <input onChange={this.handleChange}/>
        </div>
      )
    }
}
Filter.contextTypes = {
    store: PropTypes.object
  
}

export default Filter