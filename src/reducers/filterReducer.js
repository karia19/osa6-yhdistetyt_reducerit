

const FilterReducer = (store = [], action) => {
    switch (action.type) {
        case 'FILTERED':
        return action.data

        default:
        return store
        
    }
    


}

export const Filtered = (data) => {
    return {
        type: 'FILTERED',
        data
    }
}

export default FilterReducer