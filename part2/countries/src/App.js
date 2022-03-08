import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Country from './components/Country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const filteredCountries = countries.filter(country => {
    if (search === '') return ''
    return country.name.common.toLowerCase().includes(search.toLowerCase())
  })

  const showCountryDetails = (name) => {
    setSearch(name)
  }

  console.log(filteredCountries);

  return (
    <div>
      <div>
        find countries <input value={search} onChange={handleSearchChange} />
      </div>
      {filteredCountries.length === 1 ?
        <Country country={filteredCountries} /> :
        filteredCountries.length > 10 ? 'Too many matches, specify another filter' :
          filteredCountries.map((country => (
            <div key={country.name.common}>
              <p>
                {country.name.common}
                <button onClick={() => showCountryDetails(country.name.common)}>show</button>
              </p>
            </div>
          )))}
    </div>
  )
}

export default App