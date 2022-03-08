import React from 'react'

const Person = ({ person, onDeletePerson }) => {
  return (
    <div key={person.name}>
      {person.name} {person.number}
      <button onClick={() => onDeletePerson(person.id)}>delete</button>
    </div>
  )
}

export default Person