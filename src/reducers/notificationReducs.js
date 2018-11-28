

const notificationReducer = (state = 'NEW', action) => {
    console.log('Tulekoo', action)
    switch (action.type) {
        case 'MAKE_NEW':
        return action.data

        default: 
        return state
    }
}
export const newAnecdotes = (data) => {
    console.log('miki',data)
    return {
        type: 'MAKE_NEW',
        data
    }
}

export default notificationReducer