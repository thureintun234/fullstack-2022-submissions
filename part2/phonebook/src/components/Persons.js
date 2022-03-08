import React from 'react'
import Person from './Person'

const Persons = ({ filteredContact, onDeletePerson }) => {
  return (
    <div>
      {
        filteredContact.map(person => <Person key={person.name}
          person={person} onDeletePerson={onDeletePerson} />)
      }
    </div>
  )
}

export default Persons