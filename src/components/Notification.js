import React from 'react'
import PropTypes from 'prop-types'

class Notification extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }
  render() {
    
    const Message = () => {
      const mes = this.context.store.getState().notificationsKaksi
      
  
      if (mes === 'NEW')
        return(
          <p></p>
        )
      else {
        return (
           <div style={style}>
            { this.context.store.getState().notificationsKaksi}
           </div>
        
        )
        
      }
   
    }
    
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
   
  
    return (
      <Message />
    )
  }

}

Notification.contextTypes = {
  store: PropTypes.object
}

export default Notification
