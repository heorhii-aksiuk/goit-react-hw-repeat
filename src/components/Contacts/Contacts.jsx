import React from 'react'

function Contacts({ onRemoveClick, onFilterChange, contacts }) {
  const handleFilter = (e) => {
    onFilterChange(e.target.value)
  }

  const handleDelete = (e) => {
    onRemoveClick(e.target.name)
  }

  return (
    <>
      <input onChange={handleFilter} type="text"></input>
      <ul>
        {contacts.map(({ name, number }) => (
          <li key={name}>
            {name} - {number}
            <button onClick={handleDelete} name={name} type="button">
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Contacts
