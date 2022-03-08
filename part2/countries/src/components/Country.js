import React from 'react'

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country[0].name.common}</h1>
      <div>capital {country[0].capital}</div>
      <div>area {country[0].area}</div>
      <p><strong>languages:</strong></p>
      <ul>
        {
          Object.values(country[0].languages).map(name => {
            return <li key={name}>{name}</li>
          })
        }
      </ul>
      <img src={country[0].flags.png} alt='flat' width={100} height={100} />
      <h2>Weather in {country[0].capital}</h2>
      <p>temperture $$ Celcius</p>
    </div>
  )
}

export default Country