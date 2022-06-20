import { useState } from 'react'
import { nanoid } from 'nanoid'

function ContactForm({ onSubmitForm }) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const inputNameId = nanoid(5)
  const inputNumberId = nanoid(5)

  const handleChange = (e) => {
    if (e.target.name === 'name') setName(e.target.value)
    if (e.target.name === 'number') setNumber(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmitForm({ name, number })
    resetForm()
  }

  const resetForm = () => {
    setName('')
    setNumber('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={inputNameId}>Name</label>
        <input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          id={inputNameId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles Miller"
          required
        />
        <label htmlFor={inputNumberId}>Number</label>
        <input
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          id={inputNumberId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    </>
  )
}

export default ContactForm
