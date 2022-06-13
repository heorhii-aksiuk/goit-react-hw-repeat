import React from 'react'
import { useState } from 'react'

function ContactForm({ getContact }) {
  const [newContact, setNewContact] = useState({ name: '', number: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const number = e.target.number.value
    setNewContact({ name, number })
    getContact({ name, number })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles Miller"
          required
        />
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
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
