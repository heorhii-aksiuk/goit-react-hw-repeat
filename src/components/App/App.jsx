import { Component } from 'react'
import Section from '../Section/Section'
import ContactForm from '../ContactForm/ContactForm'
import Contacts from '../Contacts/Contacts'

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  handleSubmit = (contact) => {
    const { contacts } = this.state
    if (contacts.some((el) => el.name === contact.name)) {
      return alert(`${contact.name} is already exists!`)
    }
    this.setState((state) => ({
      contacts: [contact, ...state.contacts],
    }))
  }

  handleFilter = (e) => {
    const newFilter = e.target.value
    this.setState({ filter: newFilter })
  }

  handleRemove = (contact) => {
    const { contacts } = this.state
    this.setState({
      contacts: contacts.filter((el) => el.name !== contact),
    })
  }

  render() {
    const { contacts, filter } = this.state

    const filteredContacts = contacts.filter((contact) =>
      contact.name.includes(filter),
    )

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmitForm={this.handleSubmit}></ContactForm>
        </Section>
        <Section title="Contacts">
          <Contacts
            onFilterChange={this.handleFilter}
            contacts={filteredContacts}
            onRemoveClick={this.handleRemove}
          ></Contacts>
        </Section>
      </>
    )
  }
}

export default App
