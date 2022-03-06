import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  })

  const randomGenerateAnecdotes = () => {
    let randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  const voteFavourite = (voteItem) => {
    let newVote = { ...votes }
    newVote[voteItem] += 1
    setVotes(newVote)
  }

  const mostVotes = () => {
    let max = 0;
    for (let key in votes) {
      if (votes[key] > max) {
        max = key
      }
    }
    return max
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]} <br />has {votes[selected]} votes</p>
      <button onClick={() => voteFavourite(selected)}>vote</button>
      <button onClick={randomGenerateAnecdotes}>next anecdotes</button>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVotes()]} has {votes[mostVotes()]} votes</p>
    </div>
  )
}

export default App