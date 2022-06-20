import Section from '../Section/Section'
import ContactForm from '../ContactForm/ContactForm'
import Contacts from '../Contacts/Contacts'
import { useState } from 'react'

function App() {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')

  const handleSubmit = (contact) => {
    if (contacts.some((el) => el.name === contact.name)) {
      return alert(`${contact.name} is already exists!`)
    }
    setContacts([contact, ...contacts])
  }

  const handleFilter = (newFilter) => {
    setFilter(newFilter)
  }

  const handleRemove = (contact) => {
    setContacts(contacts.filter((el) => el.name !== contact))
  }

  const filteredContacts = contacts.filter((contact) =>
    contact.name.includes(filter),
  )

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmitForm={handleSubmit}></ContactForm>
      </Section>
      <Section title="Contacts">
        <Contacts
          onFilterChange={handleFilter}
          contacts={filteredContacts}
          onRemoveClick={handleRemove}
        ></Contacts>
      </Section>
    </>
  )
}

export default App
