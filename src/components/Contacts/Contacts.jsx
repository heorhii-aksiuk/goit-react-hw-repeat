import React from 'react'

function Contacts({ remove, getFilter, contacts }) {
  const handleFilter = (e) => {
    getFilter(e.target.value)
  }

  const handleDelete = (e) => {
    remove(e.target.name)
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
