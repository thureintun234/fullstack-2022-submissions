import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import axios from 'axios'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [notification, setNotification] = useState({ message: null, style: 'success' })

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const addContact = (e) => {
    e.preventDefault()

    const checkNameExit = persons.find(p => p.name === newName)
    if (checkNameExit) {
      const willReplaceExistingNumber = window.confirm(`${checkNameExit.name} is already added to phonebook, replace the old number with a new one?`)
      if (willReplaceExistingNumber) {
        const updatedNumberContact = { ...checkNameExit, number: newNumber }
        personService
          .update(checkNameExit.id, updatedNumberContact)
          .then(returnedObject => {
            console.log(returnedObject);
            setPersons(persons.map(p => p.id !== checkNameExit.id ? p : returnedObject))
            setNewName('')
            setNewNumber('')
          })
      }
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    personService
      .create(personObject)
      .then(returnedData => {
        setPersons(persons.concat(returnedData))
        setNotification({ ...notification, message: `Added ${personObject.name}` })
        setTimeout(() => {
          setNotification({ ...notification, message: null })
        }, 3000)
      })

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const deletePerson = (id) => {
    const findDeletePerson = persons.find(p => p.id === id)
    const isDeleteContact = window.confirm(`Delete ${findDeletePerson.name} ?`)
    if (isDeleteContact) {
      personService
        .remove(id)
        .then()
        .catch(err => {
          setNotification({ ...notification, message: `Information of ${findDeletePerson.name} has already been removed from server`, style: 'error' })
          setTimeout(() => {
            setNotification({ ...notification, message: null })
          }, 3000)
        })
      const filteredPerson = persons.filter(p => p.id !== id)
      setPersons(filteredPerson)
    }
    return
  }

  const filteredContact = search === '' ?
    persons : persons.filter(person => {
      return person.name.toLowerCase().includes(search.toLowerCase())
    })

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification.message} style={notification.style} />
      <Filter search={search} onSearchChange={handleSearchChange} />

      <h1>add a new</h1>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        addContact={addContact}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons filteredContact={filteredContact} onDeletePerson={deletePerson} />
    </div>
  )
}

export default App