import React from 'react'
import PropTypes from 'prop-types'

    const Message = ({ message }) => {
    
      if (message === '' || message === undefined) {
        return null
      }
      
        return (
           <div style={style}>
            {message}
           </div>
        
        )
        
      }
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    
Notification.contextTypes = {
  store: PropTypes.object
}

export default Message
