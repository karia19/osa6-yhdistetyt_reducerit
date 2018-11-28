import axios from 'axios'


const getData = async () => {
    const response = await axios.get('http://localhost:3001/anecdotes')
    return response.data

}

const createNewAnecdotes = async (content) => {
    const response = await axios.post('http://localhost:3001/anecdotes', { content, votes: 0})
    return response.data
}

const addVote = async (id, content, votes) => {
   
    const response = await axios.put(`http://localhost:3001/anecdotes/${id}` , {content, votes: votes})
    return response.data
}


export default { getData , createNewAnecdotes, addVote }