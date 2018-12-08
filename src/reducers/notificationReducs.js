
const notificationReducer = (state = {}, action) => {
    switch (action.type) {
        case 'MAKE_NEW':
        return state = { message: action.data}

        default: 
        return state
    }
}
export const newAnecdotes = (data) => {
    return {
        type: 'MAKE_NEW',
        data
    }
}

export default notificationReducer
