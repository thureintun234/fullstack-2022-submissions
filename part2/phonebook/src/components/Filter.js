import React from 'react'

const Filter = ({ search, onSearchChange }) => {
  return (
    <div>
      <div>
        filter shown with <input value={search} onChange={onSearchChange} />
      </div>
    </div>
  )
}

export default Filter