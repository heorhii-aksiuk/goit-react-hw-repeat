import { Component } from 'react'
import Section from '../Section/Section'
import ContactForm from '../ContactForm/ContactForm'
import Contacts from '../Contacts/Contacts'

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    try {
      const savedContacts = JSON.parse(localStorage.getItem('contacts'))
      const condition =
        Array.isArray(savedContacts) &&
        savedContacts.every((el) => el.name && el.number)

      if (condition) {
        this.setState({ contacts: [...savedContacts] })
      }
    } catch (error) {
      console.error('components/App>componentDidMount():', error.message)
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
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
    const filter = e.target.value
    this.setState({ filter })
  }

  handleRemove = (name) => {
    const { contacts } = this.state
    this.setState({
      contacts: contacts.filter((el) => el.name !== name),
    })
  }

  render() {
    const { contacts, filter } = this.state
    const normalizeFilter = filter.toLowerCase()
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter),
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
